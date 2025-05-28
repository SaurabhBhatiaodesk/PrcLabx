'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TextField, Button, Box, CircularProgress, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import useSWR from 'swr';

interface PageData {
  _id: string;
  pageName: string;
  pageEditor: string;
  seoPageTitle: string;
  pageKeywords: string;
  pageDescription: string;
  status: boolean;
}

// Adjusted fetcher to handle server response structure
const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch data');
  }
  return data;
};

export default function EditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // Fetch data using SWR
  const { data, error, isLoading } = useSWR<{ status: number; message: string; data: PageData }>(
    id ? `/api/page/${id}` : null,
    fetcher
  );

  // State for form data
  const [formData, setFormData] = useState<PageData | null>(null);

  useEffect(() => {
    if (data && data.data) {
      setFormData(data.data); // Access the `data` property to get the PageData
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => prev && { ...prev, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => prev && { ...prev, [name]: checked });
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => prev && { ...prev, pageEditor: content });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData) return;

    try {
      const response = await fetch(`/api/page/update/${formData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageName: formData.pageName,
          pageEditor: formData.pageEditor,
          seoPageTitle: formData.seoPageTitle,
          pageKeywords: formData.pageKeywords,
          pageDescription: formData.pageDescription,
          status: formData.status,
        }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Failed to update page');
      }
    } catch (error) {
      console.error('Error updating page:', error);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error || !formData) {
    return <Typography variant="h6">Error loading page data</Typography>;
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 4 }}>
      <TextField
        required
        label="Page Name"
        name="pageName"
        value={formData.pageName}
        onChange={handleChange}
      />
      <label>Page Editor</label>
      <Editor
        apiKey="ae920f5hbpe9wq3gkz4x804iph6knqh5nk20dz6gi5l570vz" // Replace with your TinyMCE API key
        value={formData.pageEditor}
        init={{
          height: 300,
          menubar: false,
          plugins: 'link image code',
          toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | code',
        }}
        onEditorChange={handleEditorChange}
      />
      <TextField
        required
        label="SEO Page Title"
        name="seoPageTitle"
        value={formData.seoPageTitle}
        onChange={handleChange}
      />
      <TextField
        required
        label="Page Keywords"
        name="pageKeywords"
        value={formData.pageKeywords}
        onChange={handleChange}
      />
      <TextField
        required
        label="Page Description"
        name="pageDescription"
        value={formData.pageDescription}
        onChange={handleChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="status"
            checked={formData.status}
            onChange={handleCheckboxChange}
          />
        }
        label="Status"
      />
      <Button type="submit" variant="contained" color="primary">
        Update Page
      </Button>
    </Box>
  );
}

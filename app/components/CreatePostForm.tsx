import React, { useState } from 'react';
import { Form, useNavigation } from 'react-router';
import { createPostInputSchema } from '~/schemas/post.schema';
import { z } from 'zod';

type FormErrors = z.ZodIssue[];

export function CreatePostForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]); // Clear previous errors

    // Client-side validation
    const validationResult = createPostInputSchema.safeParse({
      caption,
      image: imageFile || undefined,
    });

    if (!validationResult.success) {
      setErrors(validationResult.error.issues);
      return;
    }

    // If validation passes, proceed with form submission
    const formData = new FormData();
    if (caption) formData.append('caption', caption);
    if (imageFile) formData.append('file', imageFile); // 'file' matches backend expected field name

    // Programmatically submit the form data using useNavigation's form ref
    (event.target as HTMLFormElement).submit();
  };

  return (
    // Main container with a modern, glass-like card design
    <div className="mx-auto my-8 max-w-lg p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
      {/* Title with a bold font and a subtle gradient */}
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
        New Post
      </h2>
      <Form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Image Upload section */}
        <div>
          <label
            htmlFor="image"
            className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl cursor-pointer
              transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <span className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              {/* SVG icon for image upload */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-base font-semibold">Upload Image</span>
            </span>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="sr-only" // Visually hide the input, but keep it accessible
            />
          </label>
          {previewUrl && (
            <div className="mt-6 flex justify-center">
              <img
                src={previewUrl}
                alt="Image Preview"
                className="max-h-80 w-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700 object-cover"
              />
            </div>
          )}
          {errors.find((e) => e.path[0] === 'image') && (
            <p className="mt-2 text-xs text-rose-500 dark:text-rose-400 font-medium">
              {errors.find((e) => e.path[0] === 'image')?.message}
            </p>
          )}
        </div>

        {/* Caption input section */}
        <div>
          <label
            htmlFor="caption"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Caption
          </label>
          <textarea
            id="caption"
            name="caption"
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            // Styled textarea for a clean look with focus states
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm
              focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-3 placeholder-gray-400"
            placeholder="Write a caption..."
          ></textarea>
          {errors.find((e) => e.path[0] === 'caption') && (
            <p className="mt-2 text-xs text-rose-500 dark:text-rose-400 font-medium">
              {errors.find((e) => e.path[0] === 'caption')?.message}
            </p>
          )}
        </div>

        {/* Submit button with modern styling and loading spinner */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 rounded-xl shadow-md
            bg-gradient-to-r from-blue-500 to-purple-600 text-white
            font-bold text-lg
            hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
            disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              {/* Simple SVG loading spinner */}
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Creating...</span>
            </>
          ) : (
            <span>Create Post</span>
          )}
        </button>
      </Form>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import { IconUpload, IconX, IconFile } from "@tabler/icons-react";

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      // Validasi ukuran file (max 10MB per file)
      const validFiles = newFiles.filter(file => file.size <= 10 * 1024 * 1024);
      if (validFiles.length !== newFiles.length) {
        alert("Beberapa file terlalu besar. Maksimal 10MB per file.");
      }
      // Validasi jumlah file (max 5 file)
      const totalFiles = files.length + validFiles.length;
      if (totalFiles > 5) {
        alert("Maksimal 5 file yang dapat diupload.");
        return;
      }
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const targetEmail = "jadiinworks@gmail.com";
    const subject = `Kontak dari ${name || "Calon Klien"}`;
    const bodyLines = [
      `Nama: ${name}`,
      `Email: ${email}`,
      "",
      "Pesan:",
      message,
    ];
    
    if (files.length > 0) {
      bodyLines.push("", "File yang dilampirkan:");
      files.forEach((file, index) => {
        bodyLines.push(`${index + 1}. ${file.name} (${formatFileSize(file.size)})`);
      });
    }
    
    const body = bodyLines.join("\n");

    const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid gap-2">
        <label htmlFor="nama" className="text-sm font-medium">
          Nama
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          required
          placeholder="Nama lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@perusahaan.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="pesan" className="text-sm font-medium">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          required
          rows={5}
          placeholder="Ceritakan kebutuhan Anda secara singkat..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
      </div>

      {/* File Upload Section */}
      <div className="grid gap-2">
        <label htmlFor="files" className="text-sm font-medium">
          Lampiran File (Opsional)
        </label>
        <div className="space-y-3">
          {/* File Input */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="relative cursor-pointer rounded-md border-2 border-dashed border-neutral-300 dark:border-neutral-700 p-6 text-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <input
              ref={fileInputRef}
              type="file"
              id="files"
              name="files"
              multiple
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
              onChange={handleFileChange}
              className="hidden"
            />
            <IconUpload className="mx-auto h-8 w-8 text-neutral-400 dark:text-neutral-500" />
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Klik untuk memilih file atau drag & drop
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              Maksimal 5 file, 10MB per file. Format: PDF, DOC, DOCX, TXT, JPG, PNG, ZIP, RAR
            </p>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                File yang dipilih ({files.length}/5):
              </p>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-3"
                >
                  <div className="flex items-center gap-2">
                    <IconFile className="h-4 w-4 text-neutral-500" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate max-w-[200px]">
                        {file.name}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    <IconX className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Kirim
        </button>
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        Mengirim formulir akan membuka aplikasi email Anda dengan isi yang sudah diisi otomatis.
      </p>
    </form>
  );
}



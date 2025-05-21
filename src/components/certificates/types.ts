
export interface Certificate {
  id: number;
  logo: string;
  title: string;
  description?: string[];
  viewUrl: string;
  certificateImage?: string; // Image URL to the certificate image, if available
  certificateFile?: string; // URL to the certificate file (PDF)
}

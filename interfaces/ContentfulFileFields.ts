export default interface ContentfulFileFields {
  title?: string;
  description?: string;
  file: {
    url?: string;
    details?: {
      size?: number;
    };
    fileName?: string;
    contentType?: string;
  };
}

export declare const backend: {
  submitContact: (name: string, email: string, message: string) => Promise<{ ok: boolean; message: string }>;
  getSubmissions: () => Promise<Array<{ id: bigint; name: string; email: string; message: string; timestamp: bigint }>>;
};

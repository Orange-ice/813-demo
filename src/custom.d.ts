interface ResponseData<T> {
  data: T;
  code: string;
  success: boolean;
}

interface UserDetail {
  id: string;
  company: { id: string; name: string; };
  industry: { id: string; name: string; };
  about: string;
  username: string;
  name: string;
}

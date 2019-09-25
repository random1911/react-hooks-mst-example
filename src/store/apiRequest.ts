import { formatParams } from "../utils";

interface IApiRequest {
  endpoint: string;
  method?:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | "HEAD"
    | "OPTIONS"
    | "TRACE";
  params?: any;
  body?: any;
  signal?: AbortSignal;
}

const apiRequest = async ({
  endpoint,
  method = "GET",
  params,
  body,
  signal
}: IApiRequest) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const fetchOptions: any = {
    method,
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined,
    signal
  };
  const paramsString = params ? `${formatParams(params)}&` : "";
  const fullEndPoint = `${apiUrl}${endpoint}?${paramsString}api_token=${apiKey}`;
  return await fetch(fullEndPoint, fetchOptions);
};

export default apiRequest;

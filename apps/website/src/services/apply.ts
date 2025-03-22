// import apiConfig from "@repo/api/config/apiConfig";
import apiConfig from "@/config/apiConfig";
import { 
  ApplyGETResponse,
  ApplyPOSTRequest,
  ApplyPOSTResponse,
  ApplyLoadPOSTRequest,
  ApplyLoadPOSTResponse,
  ApplySavePOSTRequest,
  ApplySavePOSTResponse,
  ApplySubmitPOSTRequest,
  ApplySubmitPOSTResponse
 } from "@/models/apply";

export const getApplyQuestions = async (): Promise<ApplyGETResponse> => {
  const response = await apiConfig.get("apply");
  return response.data;
}

export const postApply = async (data: ApplyPOSTRequest): Promise<ApplyPOSTResponse> => {
  const response = await apiConfig.post("apply", data);
  return response.data;
}

export const postApplySave = async (data: ApplySavePOSTRequest): Promise<ApplySavePOSTResponse> => {
  const response = await apiConfig.post("apply/save", data);
  return response.data;
}

export const postApplyLoad = async (data: ApplyLoadPOSTRequest): Promise<ApplyLoadPOSTResponse> => {
  const response = await apiConfig.post("apply/load", data);
  return response.data;
}

export const postApplySubmit = async (data: ApplySubmitPOSTRequest): Promise<ApplySubmitPOSTResponse> => {
  const response = await apiConfig.post("apply/submit", data);
  return response.data;
}

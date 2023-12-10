type MediumType = 'chat' | 'gsm' | 'voip' | 'video';
type BloodType = 'A+' | 'B+' | 'AB+' | 'O+' | 'A-' | 'B-' | 'AB-' | 'O-';
type MaritalStatus = 'single' | 'married' | 'divorced' | 'widow';
type BoolString = 'yes' | 'no';
type GenderType = 'male' | 'female';
interface UserType {
  id?: number;
  name?: string;
  phone_number?: string;
  email?: string;
  date_of_birth?: string;
  gender?: GenderType;
  insurance_id?: string;
  policy_number?: string;
  nationality_number?: string;
  height?: string;
  weight?: string;
  blood_type?: BloodType;
  smoker?: BoolString;
  alcoholic?: BoolString;
  marital_status?: MaritalStatus;
  created_at?: string;
  updated_at?: string;
}
interface MediaType {
  id?: string;
  type?: string;
  name?: string;
  path?: string;
  extension?: string;
  url?: string;
  size?: number;
}
interface SocketParams {
  apiKey?: string;
  cluster?: string;
  authEndpoint?: string;
}
interface ResponseType<T> {
  status: number;
  data: T;
}
interface ChatData {
  id?: string;
  message?: string;
  sent_at?: string;
  chat_user_id?: string;
}
interface ChatHistory {
  id?: number;
  consultation_id?: number;
  data?: ChatData[];
  created_at?: string;
  updated_at?: string;
}
interface ChatConfig {
  id?: number;
  consultation_id?: number;
  group_id?: String;
  chat_user_id?: String;
  app_id?: String;
  chat_user_token?: String;
}
interface VoipConfig {
  id?: number;
  consultation_id?: number;
  apiKey?: string;
  callId?: string;
  token?: string;
}
interface Recommendation {
  id?: number;
  consultation_id?: number;
  data?: RecommendationData;
  created_at?: string;
  updated_at?: string;
}
interface RecommendationData {
  lab?: RecommendationLab;
  drug?: RecommendationDrug;
  icd10?: RecommendationICD10;
  followUp?: RecommendationFollowUp[] | null;
  doctorReferral?: RecommendationDoctorReferral;
  postCallAnswer?: RecommendationPostCallAnswer[] | null;
}
interface RecommendationLab {
  lab?: RecommendationLabItem[] | null;
  panel?: RecommendationLabItem[] | null;
}
interface RecommendationLabItem {
  name?: string;
}
interface RecommendationDrug {
  fdaDrug?: RecommendationFdaDrug[] | null;
}
interface RecommendationFdaDrug {
  name?: string;
  dosage?: string;
  duration?: number;
  howToUse?: string;
  frequency?: string;
  tradeName?: string;
  dosageForm?: string;
  dosageUnit?: string;
  packageSize?: string;
  packageType?: string;
  strengthValue?: string;
  relationWithFood?: string;
  specialInstructions?: string;
  routeOfAdministration?: string;
}
interface RecommendationICD10 {
  symptom?: RecommendationSymptom[] | null;
  diagnosis?: RecommendationDiagnosis[] | null;
}
interface RecommendationSymptom {
  code?: string;
  name?: string;
}
interface RecommendationDiagnosis {
  code?: string;
  name?: string;
}
interface RecommendationFollowUp {
  name?: string;
}
interface RecommendationDoctorReferral {
  name?: string;
}
interface RecommendationPostCallAnswer {
  answer?: string;
  question?: string;
}
interface ConsultationType {
  id?: number;
  userId?: number;
  question?: string;
  doctorName?: string;
  doctorAvatar?: string;
  medium?: string;
  status?: string;
  isFulfilled?: number;
  parentConsultationId?: number;
  createdAt?: string;
  updatedAt?: string;
  user?: UserType;
  parentConsultation?: ConsultationType;
  media?: MediaType[];
  consultations?: ConsultationType[];
  pusherChannel?: string;
  pusherAppKey?: string;
  chatConfig?: ChatConfig;
  voipConfig?: VoipConfig;
  videoConfig?: VoipConfig;
  chatHistory: ChatHistory;
  recommendation?: Recommendation;
  socketParams?: SocketParams;
}
export type {
  ResponseType,
  MediumType,
  BloodType,
  MaritalStatus,
  BoolString,
  GenderType,
  UserType,
  MediaType,
  ChatData,
  ChatHistory,
  ChatConfig,
  VoipConfig,
  Recommendation,
  RecommendationData,
  RecommendationLab,
  RecommendationLabItem,
  RecommendationDrug,
  RecommendationFdaDrug,
  RecommendationICD10,
  RecommendationSymptom,
  RecommendationDiagnosis,
  RecommendationFollowUp,
  RecommendationDoctorReferral,
  RecommendationPostCallAnswer,
  ConsultationType,
};

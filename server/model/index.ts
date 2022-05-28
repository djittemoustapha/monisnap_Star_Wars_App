export enum HTTP_CODE {
  SUCCESS_OK = 200,
  SUCCESS_CREATED = 201,
  SUCCESS_NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  SERVER_INTERNAL_ERROR = 500,
}

export type Character = {
  id: number;
  name: string;
  pic: string;
  homeworld?: string;
  stars: number;
}
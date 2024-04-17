import requester from "src/utils/requester";

export type FetchById = {
  id?: string,
};

/**
 * Retourner le menu du jour.
 *
 * @param id L'ID de la résidence 
 * @returns json data.
 */
const getMenuDuJour = async ({ id }: FetchById) => (
  (await requester.get<Menu>(`31f6a644f075a069a4df`)).data
  // (await requester.get(`route/${id}`)).data
);

/**
 * Retourner logo de la résidence.
 *
 * @param id L'ID de la résidence 
 * @returns json data.
 */
const getMedia = async ({ id }: FetchById) => (
  (await requester.get<Media>(`b4f2fa6c0208498a091b`)).data
  // (await requester.get(`route/${id}`)).data
);

/**
 * Retourner Actualités de la résidence.
 *
 * @param id L'ID de la résidence 
 * @returns json data.
 */
const getActualitesDeLaResidence = async ({ id }: FetchById) => (
  (await requester.get<Menu>(`b4f2fa6c0208498a091b`)).data
  // (await requester.get(`route/${id}`)).data
);

export default {
  getMenuDuJour,
  getMedia,
  getActualitesDeLaResidence,
};

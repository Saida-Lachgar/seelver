import requester from "src/utils/requester";

export type FetchMenuDuJour = {
  id: number,
};

/**
 * Récupère l'URL de la ressource API pour mapper une association de client.
 *
 * @param id L'ID du client
 * @returns URL de l'association.
 */
const getMenuDuJour = async ({ id }: FetchMenuDuJour) => (
  (await requester.get(`posts/${id}`)).data
);

export default {
  getMenuDuJour,
};

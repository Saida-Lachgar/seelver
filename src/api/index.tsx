import requester from "src/utils/requester";

export type FetchMenuDuJour = {
  id?: string,
};

/**
 * Récupère l'URL de la ressource API pour mapper une association de client.
 *
 * @param id L'ID du client
 * @returns URL de l'association.
 */
const getMenuDuJour = async ({ id }: FetchMenuDuJour) => (
  (await requester.get(`db`)).data
);

export default {
  getMenuDuJour,
};

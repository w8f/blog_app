import { client } from "../libs/client";

/**
 * microCMS 全件取得メソッド
 *
 * @param offset
 * @param limit
 * @param endpoint
 */
export const fetchAll = async (offset = 0, limit = 10, endpoint: string) => {
  let data = await client.get({
    endpoint: endpoint,
    queries: {
      offset: offset,
      limit: limit,
    },
  });
  // 全件取得
  while (offset + limit <= data.totalCount) {
    offset += limit;
    const d = await client.get({
      endpoint: "blog",
      queries: {
        offset: offset,
        limit: limit,
      },
    });
    data = [...data.contents, ...d.contents];
  }
  return data;
};

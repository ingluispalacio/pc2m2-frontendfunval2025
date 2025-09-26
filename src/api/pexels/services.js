import client from "./client";

const getImages = (limit = 20) => client.get(`/curated`, { params: { per_page:limit } });

const searchImages = (query="cars", limit = 20) =>  client.get("/search", { params: {  query, per_page:limit } });

export { getImages, searchImages };
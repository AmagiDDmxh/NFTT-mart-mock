import casual from "casual";

const status = [1, 2, 3];
const collectionIds = [1, 2, 3];
const categoryIds = [1, 2, 3, 4, 5];

type Asset = {
  id: number;
  name: string;
  picUrl?: string;
  status: number;
  address: string;
  describe: string;
  metadata: string;
  externalLinks: string;
  price: number;
  latestPrice?: number;
  categoryId: number;
  collectionId: number;
  createdAt: string;
  updatedAt: string;
}

const DEFAULT_DATA: Asset[] = [
  {
    id: 1,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
    latestPrice: casual.double(1, 100000),
  },
  {
    id: 2,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 3,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 4,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 5,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 6,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 7,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 8,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 9,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 10,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 11,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 12,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 13,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 14,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
  {
    id: 15,
    name: casual.name,
    picUrl:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    status: casual.random_element(status),
    address: "0x12541254189999",
    describe: casual.sentence,
    metadata: casual.sentence,
    externalLinks: casual.sentence,
    collectionId: casual.random_element(collectionIds),
    categoryId: casual.random_element(categoryIds),
    createdAt: "2021-02-26T00:59:52+08:00",
    updatedAt: "2021-02-26T00:59:52+08:00",
    price: casual.double(1, 100000),
  },
]

export default DEFAULT_DATA;

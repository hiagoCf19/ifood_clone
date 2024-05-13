"use server";
import { Prisma } from "@prisma/client";
import { db } from "../lib/prisma";

export const createOrder = async (data: Prisma.OrderCreateInput) => {
  const order = await db.order.create({ data });
  return order;
};
import { db } from "../db.connection";

//Eliminar usuario
export const delUserByID = async (idu: number) => {
  //Elimina usuario por id
  try {
    const deletedUser = await db.user.delete({
      where: {
        id: idu,
      },
    });
    return { msg: "User deleted", deletedUser };
  } catch (error) {
    return error;
  }
};

export const delUserByName = async (name: string) => {
  //Elimina usuario por nombre
  try {
    const deletedUser = await db.user.delete({
      where: {
        name: name,
      },
    });
    return { msg: "User deleted", deletedUser };
  } catch (error) {
    return error;
  }
};

//

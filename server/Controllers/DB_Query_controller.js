// Assuming you have a different pool object for your user_table database
import pool from "../Configurations/databaseConnection.js";

export async function getAllUsers() {
  try {
    const [rows] = await pool.query("SELECT * FROM user_table");
    console.log("All user list", rows);
    return rows;
  } catch (err) {
    console.log("Error", err);
  }
  return null;
}

export async function getUserById(auth_provider_id, auth_provider) {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM user_table
      WHERE auth_provider_id = ? AND auth_provider_id = ?
    `,
    [auth_provider_id, auth_provider]
  );
  return rows[0];
}

export async function createUser(
  authProviderId,
  authProvider,
  password,
  username,
  imgLink
) {
  const [result] = await pool.query(
    `
    INSERT INTO user_table (auth_provider_id, auth_provider, password, username, img_link)
    VALUES (?, ?, ?, ?, ?)
  `,
    [authProviderId, authProvider, password, username, imgLink]
  );

  const userId = result.insertId;
  return getUserById(userId);
}

export async function updateUser(userId, updatedData) {
  const { authProviderId, authProvider, password, username, imgLink } =
    updatedData;
  await pool.query(
    `
    UPDATE user_table
    SET auth_provider_id = ?, auth_provider = ?, password = ?, username = ?, img_link = ?
    WHERE id = ?
  `,
    [authProviderId, authProvider, password, username, imgLink, userId]
  );

  return getUserById(userId);
}

export async function deleteUser(userId) {
  const userToDelete = await getUserById(userId);

  if (!userToDelete) {
    throw new Error("User not found");
  }

  await pool.query(
    `
    DELETE FROM user_table
    WHERE id = ?
  `,
    [userId]
  );

  return userToDelete;
}

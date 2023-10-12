const loginHost = "https://skypro-music-api.skyeng.tech/user/login/";
const regHost = "https://skypro-music-api.skyeng.tech/user/signup/";

export async function getAllTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Что-то случилось");
  }
  return data;
}

export async function fetchLogin({ email, password }) {
  return fetch(loginHost, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 401) {
      throw new Error("Пользователь с таким email или паролем не найден");
    }
    return response.json();
  });
}

export async function fetchReg({ username, email, password }) {
  const response = await fetch(regHost, {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await response.json();

  if (!response.ok) {
    let errorMessages = [];
    if (jsonData.email && jsonData.email.length > 0) {
      errorMessages.push(jsonData.email[0]);
    }
    if (jsonData.password && jsonData.password.length > 0) {
      errorMessages.push(jsonData.password[0]);
    }
    if (jsonData.username && jsonData.username.length > 0) {
      errorMessages.push(jsonData.username[0]);
    }

    const errorMessage = errorMessages.join(" \n");

    if (!errorMessage) {
      errorMessage = "Ошибка сервера";
    }

    throw new Error(errorMessage);
  }
  return jsonData;
}

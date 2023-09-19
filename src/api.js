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

export async function fetchLogin(email, password) {
  return fetch(loginHost, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
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

export async function fetchReg(email, password, username) {
  return fetch(regHost, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Ошибка входа");
    }
    return response.json();
  });
}

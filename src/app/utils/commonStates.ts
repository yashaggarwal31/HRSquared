let user_state = "user";

export const setUserState = (state: "user" | "admin") => {
  user_state = state;
};

export const getUserState = () => user_state;

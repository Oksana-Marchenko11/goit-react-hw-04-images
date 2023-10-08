import { createContext, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);
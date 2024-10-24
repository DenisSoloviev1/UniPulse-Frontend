import React, { LazyExoticComponent } from "react";

type ValueOf<T> = T[keyof T];

// roles

export const RolesDict = {
  ADMIN: "admin",
  MEDIA: "media",
  EDITOR: "editor",
  PUBLISHER: "publisher",
  USER: "user",
} as const;

export type Roles = ValueOf<typeof RolesDict>;

// router types

export interface IRoute {
  id: number;
  path: string;
  isPublic: boolean;
  component: LazyExoticComponent<React.FC<any>>; 
  roles: Roles[];
}

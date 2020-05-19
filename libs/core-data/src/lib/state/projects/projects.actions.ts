import { Project } from "../../projects/project.model";
import { Action } from "@ngrx/store";

export enum ProjectsActionTypes {
  SelectedProject = '[Projects] Selected',
  LoadProjects = '[Projects] Load Data',
  CreateProject = '[Projects] Add Data',
  UpdateProject = '[Projects] Update Data',
  DeleteProject = '[Projects] Delete Data'
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.SelectedProject;
  constructor(private payload: Project) { }
}

export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;
  constructor(private payload: Project[]) {}
}

export class CreateProject implements Action {
  readonly type = ProjectsActionTypes.CreateProject;
  constructor(private payload: Project) { }
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(private payload: Project) { }
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(private payload: Project) { }
}

export type ProjectsAction =
  SelectProject
  | LoadProjects
  | CreateProject
  | UpdateProject
  | DeleteProject
  ;
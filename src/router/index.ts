import Events from "../pages/Events";

export interface IRoute {
    path: string;
    component: React.FC;
}

export enum RoteNames {
    ARBOR1 = '/arbor1',
    ARBOR2 = '/arbor2',
    ARBOR3 = '/arbor3'

}

export const publicRoutes: IRoute[] = [
    {path: RoteNames.ARBOR1, component: Events},
    {path: RoteNames.ARBOR2, component: Events},
    {path: RoteNames.ARBOR3, component: Events}
]
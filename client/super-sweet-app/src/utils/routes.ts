export interface RoutesObject {
    title: string;
    route: string;
}

export interface RoutesInterface {
    HOME: RoutesObject;
    POST: RoutesObject;
    EDIT: RoutesObject;
}

export const Routes: RoutesInterface = {
    HOME: {
        title: 'Home',
        route: '/',
    },
    POST: {
        title: 'Post',
        route: '/post',
    },
    EDIT: {
        title: 'Edit',
        route: '/edit',
    },

};
import history from './history';

export const Authentication = (component, role) => {
    if (role) return component;
    history.replace("/")
}
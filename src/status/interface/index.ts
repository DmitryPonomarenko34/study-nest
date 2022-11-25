type Name = 'ready' | 'inProgress';
type Color = 'green' | 'orange';

export interface IStatus {
  name: Name;
  color: Color;
}

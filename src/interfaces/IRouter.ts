export interface IRouter {
  [key: string]: any;
  mouse_up: (_y: number) => void;
  mouse_down: (_y: number) => void;
  mouse_left: (_x: number) => void;
  mouse_right: (_x: number) => void;
  mouse_position: () => string;
  draw_circle: (radius: number) => void;
  draw_rectangle: (width: number, height: number) => void;
  draw_square: (length: number) => void;
  prnt_scrn: () => Promise<string>;
}

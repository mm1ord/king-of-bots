import { AcGameObject } from "./AcGameObject";
import { Cell } from "./Cell";

export class Snake extends AcGameObject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)]; //存放蛇的身体
        this.next_cell = null;
        this.speed = 5; //蛇每秒走5个格子
        this.direction = -1; //-1 表示没有指令， move表示正在移动，die表示死亡
        this.status = 'idle'; // idle表示静止，move表示正在移动，die表示死亡

        this.dr = [-1, 0, 1, 0]; // 四个方向行的偏移量
        this.dc = [0, 1, 0, -1]; // 四个方向列的偏移量
        this.step = 0;
    }

    start() {

    }

    set_direction(d) {
        this.direction = d;
    }

    next_step() {  // 将蛇的状态变成走下一步
        const d = this.direction;
        this.next_cell = new Cell(this.cells[0].r + this.dr[d], this.cells[0].c + this.dr[d]);
        this.direction = -1; // 清空操作
        this.status = 'move';
        this.step++;
    }

    update_move() {

    }

    update() {
        this.update_move();
        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
var map = {
    title: "A Last Journey",
    song: "env2",
    maker: "Cr43zy",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([-11.52, -2.06988, -159.3]);
        a.c([0, -1.2498200000000002, -30.51], true);
        a.c([0.32, -1.2497600000000002, -74.05], true);
        a.c([-6.64, -1.2496999999999998, -114.24], true);
        a.p([0, -2.56, -10.71], [0, 0, 0], [0.46, 2.12, 36.18], 1, 0);
        a.p([-9.82, -3.0499400000000003, -136.69], [0, 0, 0], [0.46, 2.12, 36.18], 1, 0);
        a.p([2.56, -2.84988, -53.22], [0, 0, 0], [0.46, 2.12, 36.18], 1, 0);
        a.p([-2.88, -3.0498200000000004, -96.53], [0, 0, 0], [0.46, 2.12, 36.18], 1, 0);
        a.y([0, -7.26976, -33.28], [0, 0, 0], [11, 11, 11], 1, 0);
        a.y([0, -7.5697, -75.8], [0, 0, 0], [11, 11, 11], 1, 0);
        a.y([-7.06, -7.57, -114.65], [0, 0, 0], [11, 11, 11], 1, 0);
        a.y([-13.22, -7.56994, -155.92], [0, 0, 0], [11, 11, 11], 1, 0);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -15.990000000000002) {
                    steer = default_steer * -2.0;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -75.57) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -75.60000000000001) {
                    steer = default_steer * -2.0;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -221.57999999999998) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('C0', [0, -1.2498200000000002, -30.51], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [0.32, -1.2497600000000002, -74.05], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-6.64, -1.2496999999999998, -114.24], [0, 0, 0], [2, 2, 2]);
        a.re('P0', [0, -2.56, -10.71], [0, 0, 0], [0.46, 2.12, 36.18]);
        a.re('P1', [-9.82, -3.0499400000000003, -136.69], [0, 0, 0], [0.46, 2.12, 36.18]);
        a.re('P2', [2.56, -2.84988, -53.22], [0, 0, 0], [0.46, 2.12, 36.18]);
        a.re('P3', [-2.88, -3.0498200000000004, -96.53], [0, 0, 0], [0.46, 2.12, 36.18]);
        a.re('Y0', [0, -7.26976, -33.28], [0, 0, 0], [11, 11, 11]);
        a.re('Y1', [0, -7.5697, -75.8], [0, 0, 0], [11, 11, 11]);
        a.re('Y2', [-7.06, -7.57, -114.65], [0, 0, 0], [11, 11, 11]);
        a.re('Y3', [-13.22, -7.56994, -155.92], [0, 0, 0], [11, 11, 11]);
    },
    physics_update: function() {},
    render_update: function() {}
}

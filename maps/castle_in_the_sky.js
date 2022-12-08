var map = {
    title: "Castle in the Sky",
    song: "env2",
    maker: "Zhou Yu",
    spawn: [0, 0.5, 0],
    init: function() {
        a.s([9.19014, 5.11014, -18.45986], 4, "21c21b", 0, 0, 0.6, false);
        a.s([11.01021, 6.54021, -14.83979], 5.92, "21c21b", 0, 0, 0.6, false);
        a.s([-29.43972, 5.20028, -38.26972], 5.92, "21c21b", 0, 0, 0.6, false);
        a.s([-17.69965, 1.57035, -106.41965], 4, "21c21b", 0, 0, 0.6, false);
        a.s([16.20042, 0.75042, -94.36958], 3.8, "21c21b", 0, 0, 0.6, false);
        a.s([-5.57951, 0.82049, -94.61951], 8.5, "21c21b", 0, 0, 0.6, false);
        a.s([7.77, 4.28, -122.23], 7.92, "21c21b", 0, 0, 0.6, false);
        a.s([-21.67993, 5.07007, -98.56993], 5.22, "21c21b", 0, 0, 0.6, false);
        a.s([-32.46986, 10.32014, -147.33986], 4, "21c21b", 0, 0, 0.6, false);
        a.s([-17.50979, 12.55021, -151.29979], 5.92, "21c21b", 0, 0, 0.6, false);
        a.s([-19.21972, 2.80028, -78.93972], 4.98, "21c21b", 0, 0, 0.6, false);
        a.s([0.47035, 5.16035, -52.09965], 11.22, "21c21b", 0, 0, 0.6, false);
        a.s([5.09042, 3.33042, -51.90958], 8.42, "21c21b", 0, 0, 0.6, false);
        a.s([-3.71951, 1.14049, -51.36951], 6.78, "21c21b", 0, 0, 0.6, false);
        a.s([-5, 3.41, -8.9], 4, "21c21b", 0, 0, 0.6, false);
        a.s([-26.22993, 1.57007, -112.34993], 4, "21c21b", 0, 0, 0.6, false);
        a.s([-15.45986, 1.61014, -81.07986], 3.38, "21c21b", 0, 0, 0.6, false);
        a.s([-47.18979, 1.18021, -67.11979], 9.38, "21c21b", 0, 0, 0.6, false);
        a.p([-0.72972, -0.00972, -32.86972], [-1.55, 0, 0.77], [4.18, 4.18, 5.74], "396ced", 0, 0, 0.6, false, false);
        a.p([-2.03965, -3.91965, -32.83965], [-1.55, 0, 0], [2.12, 2.94, 3.5], "396ced", 0, 0, 0.6, false, false);
        a.p([-25.85958, 3.46042, -118.18958], [1.57, 0, 0.77], [4.18, 4.18, 5.74], "396ced", 0, 0, 0.6, false, false);
        a.p([-24.54951, -0.45951, -118.17951], [1.57, 0, 0], [2.12, 2.94, 3.5], "396ced", 0, 0, 0.6, false, false);
        a.p([-1.89, -0.46, -109.49], [3.12, 0, 0], [2.12, 2.94, 3.5], "1dc23b", 0, 0, 0.6, false, false);
        a.p([-1.91993, 3.46007, -108.17993], [3.12, 0, 0.77], [4.18, 4.18, 5.74], "1dc23b", 0, 0, 0.6, false, false);
        a.y([9.19014, 3.18014, -18.45986], [-0.32, 0, 0], [1.08, 3.14, 1.08], "45371e", 0, 0, 0.6, false, 1);
        a.y([11.01021, 3.69021, -14.83979], [-0.32, 0, 0], [1.22, 3.98, 1.22], "45371e", 0, 0, 0.6, false, 1);
        a.y([-29.43972, 2.35028, -38.26972], [0, 0, 0], [1.22, 3.98, 1.22], "45371e", 0, 0, 0.6, false, 1);
        a.y([-17.69965, -0.35965, -106.41965], [0, 0, 0], [1.08, 3.14, 1.08], "45371e", 0, 0, 0.6, false, 1);
        a.y([16.20042, -1.06958, -94.36958], [0, 0, 0], [1.02, 2.98, 1.02], "45371e", 0, 0, 0.6, false, 1);
        a.y([-5.57951, -3.26951, -94.61951], [0, 0, 0], [1.76, 5.7, 1.76], "45371e", 0, 0, 0.6, false, 1);
        a.y([7.77, 0.47, -122.23], [0, 0, 0], [1.64, 5.32, 1.64], "45371e", 0, 0, 0.6, false, 1);
        a.y([-21.67993, 2.56007, -98.56993], [0, 0, 0], [1.4, 4.1, 1.4], "45371e", 0, 0, 0.6, false, 1);
        a.y([-32.46986, 8.39014, -147.33986], [0, 0, 0], [1.08, 3.14, 1.08], "45371e", 0, 0, 0.6, false, 1);
        a.y([-17.50979, 9.70021, -151.29979], [0, 0, 0], [1.22, 6.44, 1.22], "45371e", 0, 0, 0.6, false, 1);
        a.y([-19.21972, 0.39028, -78.93972], [0, 0, 0], [1.34, 3.92, 1.34], "45371e", 0, 0, 0.6, false, 1);
        a.y([0.47035, -2.51965, -52.09965], [0, 0, 0], [2.3, 9.64, 2.3], "45371e", 0, 0, 0.6, false, 1);
        a.y([-4.99958, 1.48042, -8.89958], [0, 0, 0], [1.08, 3.14, 1.08], "45371e", 0, 0, 0.6, false, 1);
        a.y([-26.22951, -0.35951, -112.34951], [0, 0, 0], [1.08, 3.14, 1.08], "45371e", 0, 0, 0.6, false, 1);
        a.y([-15.46, -0.02, -81.08], [0, 0, 0], [0.9, 2.64, 0.9], "45371e", 0, 0, 0.6, false, 1);
        a.y([-47.18993, -3.33993, -67.11993], [0, 0, 0], [2.52, 7.36, 2.52], "45371e", 0, 0, 0.6, false, 1);
        a.p([-12.32986, 1.14014, -27.91986], [-0.33, -0.24, -0.34], [3.48, 3.48, 3.48], "46474a", 0, 0, 0.6, false, false);
        a.p([-19.05979, 1.14021, -23.31979], [-2, -2.32, -0.68], [2.92, 2.92, 2.92], "46474a", 0, 0, 0.6, false, false);
        a.p([-24.72972, 1.14028, -41.63972], [-3.05, -2.61, 0.31], [2.92, 2.92, 2.92], "46474a", 0, 0, 0.6, false, false);
        a.p([-34.50965, 0.95035, -34.81965], [-2.26, -1.82, 0.64], [1.74, 1.74, 1.74], "46474a", 0, 0, 0.6, false, false);
        a.p([-18.36958, -0.73958, -71.64958], [-1.78, -0.66, 0.57], [2.92, 2.92, 2.92], "46474a", 0, 0, 0.6, false, false);
        a.p([-10.34951, -1.21951, -68.80951], [0, -0.93, 0.4], [2.92, 2.92, 2.92], "46474a", 0, 0, 0.6, false, false);
        a.p([-15.19, -0.67, -124.3], [-1.09, 0.74, 0.26], [3.66, 3.66, 3.66], "46474a", 0, 0, 0.6, false, false);
        a.p([10.70007, -1.20993, -118.93993], [-0.89, 1.81, -0.59], [3.48, 3.48, 3.48], "46474a", 0, 0, 0.6, false, false);
        a.p([-10.22986, -1.20986, -111.13986], [0.55, 3.92, 0.27], [3.06, 3.06, 3.06], "46474a", 0, 0, 0.6, false, false);
        a.p([17.43021, -2.15979, -91.63979], [-1.67, 4.49, -0.4], [2.3, 2.3, 2.3], "46474a", 0, 0, 0.6, false, false);
        a.p([-3.01972, -0.92972, -121.44972], [0.79, 1.77, -0.45], [3.66, 3.66, 3.66], "46474a", 0, 0, 0.6, false, false);
        a.p([-30.24965, 7.44035, -150.71965], [-1.1, -1.32, -0.66], [2.98, 2.98, 2.98], "46474a", 0, 0, 0.6, false, false);
        a.p([3.47042, -0.84958, -5.49958], [-3.75, -4.12, -0.73], [2.06, 2.06, 2.06], "46474a", 0, 0, 0.6, false, false);
        a.p([-24.55951, 9.20049, -170.57951], [0, 0, 0], [3.22, 5.5, 19.12], "6fb0bd", 0, 0, 0.6, false, true);
        a.p([-1.92, 0.57, -108.18], [3.12, 0, 0], [5.78, 5.78, 5.78], "7cde8e", 0, 0, 0.6, false, false);
        a.p([0.21007, -0.62993, -6.30993], [0, 0, 0], [1.54, 1.22, 13.18], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-32.63986, 0.55014, -41.11986], [3.31, 0, 0], [1.54, 1.22, 5.7], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-10.44979, 0.55021, -24.13979], [1.45, 0, 0], [1.54, 1.22, 8.48], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-31.62972, 0.15028, -48.47972], [-0.34, 0.01, 0], [1.6, 0.84, 10.12], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-25.42965, 0.01035, -53.94965], [1.8, 0, 0], [1.54, 0.94, 10.52], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-18.16958, 0.01042, -61.59958], [2.77, 0, 0], [1.54, 0.94, 14.86], "91c8cc", 0, 0, 0.6, false, false);
        a.p([7.11049, -1.60951, -81.13951], [-1.32, 0.01, 0], [1.28, 0.84, 19.78], "91c8cc", 0, 0, 0.6, false, false);
        a.p([29.61, -1.87, -101.05], [-0.06, 0.17, -0.01], [1.5, 0.84, 11.1], "91c8cc", 0, 0, 0.6, false, false);
        a.p([27.74007, -1.07993, -109.55993], [0.59, 0.01, 0], [1.5, 0.84, 8.7], "91c8cc", 0, 0, 0.6, false, false);
        a.p([20.16014, -1.04986, -112.83986], [1.57, 0.01, 0], [1.5, 0.84, 11.6], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-28.23979, 7.47021, -141.16979], [-0.01, 0.01, -0.01], [1.5, 0.84, 6.04], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-28.29972, 5.92028, -130.50972], [0, 0.31, -0.01], [1.5, 0.84, 8.2], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-4.04965, 0.55035, -21.90965], [0.94, 0, 0], [1.54, 1.22, 6.38], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-0.81958, 0.68042, -16.54958], [0.25, 0.28, 0.03], [1.6, 0.84, 8.32], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-24.88951, 0.55049, -33.68951], [1.21, 0, 0], [1.54, 1.22, 6.74], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-30.11, 0.55, -36.74], [0.85, 0, 0], [1.54, 1.22, 6.14], "91c8cc", 0, 0, 0.6, false, false);
        a.p([27.24007, -2.65993, -93.15993], [-0.64, 0.01, 0], [1.6, 0.84, 6.74], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-13.58986, -0.91986, -70.98986], [-0.64, 0.01, 0], [1.6, 0.84, 6.74], "91c8cc", 0, 0, 0.6, false, false);
        a.p([30.77021, -1.34979, -100.80979], [-0.06, 0.01, 0], [1.28, 2.32, 10.66], "91c8cc", 0, 0, 0.6, false, false);
        a.p([11.41028, 0.96028, -112.07972], [1.79, 0.54, 0], [1.5, 0.76, 8.36], "91c8cc", 0, 0, 0.6, false, false);
        a.y([-28.74965, 0.98035, -124.56965], [0, 0, 0], [4.48, 8.42, 4.48], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-28.36958, 5.89042, -146.56958], [0, 0, 0], [4.48, 3.96, 4.48], "91c8cc", 0, 0, 0.6, false, 1);
        a.p([-21.32951, 4.69049, -120.00951], [1.07, 0.01, 0], [1.62, 1.1, 13.18], "91c8cc", 0, 0, 0.6, false, false);
        a.y([-25.68, 5.89, -149.42], [0, 0, 0], [3.26, 3.96, 3.26], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-26.25993, 5.89007, -152.11993], [0, 0, 0], [2.3, 3.96, 2.3], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-23.90986, 5.89014, -152.63986], [0, 0, 0], [2.44, 3.96, 2.44], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-25.72979, 5.89021, -154.87979], [0, 0, 0], [3.18, 3.96, 3.18], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-23.47972, 5.89028, -156.76972], [0, 0, 0], [2.64, 3.96, 2.64], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-25.69965, 5.89035, -157.47965], [0, 0, 0], [1.86, 3.96, 1.86], "91c8cc", 0, 0, 0.6, false, 1);
        a.y([-24.31958, 5.89042, -159.12958], [0, 0, 0], [2.26, 3.96, 2.26], "91c8cc", 0, 0, 0.6, false, 1);
        a.p([-24.48951, 6.74049, -170.58951], [3.14, 0.01, 0], [3.3, 1.1, 20.56], "91c8cc", 0, 0, 0.6, false, false);
        a.p([-25.86, 0.57, -118.19], [1.57, 0, 0], [5.78, 5.78, 5.78], "9fb5ed", 0, 0, 0.6, false, false);
        a.p([-0.72993, -2.88993, -32.86993], [-1.55, 0, 0], [5.78, 5.78, 5.78], "9fb5ed", 0, 0, 0.6, false, false);
        a.y([-14.37986, 13.78014, -161.64986], [0, 0, 0], [3.4, 14.46, 3.4], "a8e0da", 0, 0, 0.6, false, 1);
        a.y([-34.58979, 13.78021, -161.64979], [0, 0, 0], [3.4, 14.46, 3.4], "a8e0da", 0, 0, 0.6, false, 1);
        a.y([-34.58972, 13.78028, -179.15972], [0, 0, 0], [3.4, 14.46, 3.4], "a8e0da", 0, 0, 0.6, false, 1);
        a.y([-14.37965, 13.78035, -179.15965], [0, 0, 0], [3.4, 14.46, 3.4], "a8e0da", 0, 0, 0.6, false, 1);
        a.y([-24.43958, 16.62042, -170.08958], [0, 0, 0], [5.96, 16.14, 5.96], "a8e0da", 0, 0, 0.6, false, 1);
        a.p([-28.09951, 5.70049, -75.47951], [1.55, 0, 0.77], [4.18, 4.18, 5.74], "cde01b", 0, 0, 0.6, false, false);
        a.p([-26.79, 1.78, -75.46], [1.55, 0, 0], [2.12, 2.94, 3.5], "cde01b", 0, 0, 0.6, false, false);
        a.p([-31.26993, 6.37007, -101.42993], [2.37, 0, 0.77], [4.18, 4.18, 5.74], "d124ce", 0, 0, 0.6, false, false);
        a.p([-30.35986, 2.45014, -102.35986], [2.37, 0, 0], [2.12, 2.94, 3.5], "d124ce", 0, 0, 0.6, false, true);
        a.p([36.31021, 2.80021, -90.97979], [6.31, 0, 0.77], [4.18, 4.18, 5.74], "d1331b", 0, 0, 0.6, false, false);
        a.p([36.35028, -1.10972, -89.66972], [6.31, 0, 0], [2.12, 2.94, 3.5], "d1331b", 0, 0, 0.6, false, false);
        a.p([-30.08965, 12.89035, -170.51965], [0, 0, 0], [9.14, 12.46, 18.68], "d5f0ed", 0, 0, 0.6, false, false);
        a.p([-18.97958, 12.89042, -170.51958], [0, 0, 0], [9.3, 12.46, 18.68], "d5f0ed", 0, 0, 0.6, false, false);
        a.p([-24.12951, 13.88049, -170.51951], [0, 0, 0], [7.28, 10.46, 18.68], "d5f0ed", 0, 0, 0.6, false, false);
        a.y([-14.38, 20.42, -161.65], [0, 0, 0], [4.62, 3.54, 4.62], "de498a", 0, 0, 0.6, false, 1);
        a.y([-34.58993, 20.42007, -161.64993], [0, 0, 0], [4.62, 3.54, 4.62], "de498a", 0, 0, 0.6, false, 1);
        a.y([-34.58986, 20.42014, -179.37986], [0, 0, 0], [4.62, 3.54, 4.62], "de498a", 0, 0, 0.6, false, 1);
        a.y([-14.37979, 20.42021, -179.37979], [0, 0, 0], [4.62, 3.54, 4.62], "de498a", 0, 0, 0.6, false, 1);
        a.y([-24.46972, 24.02028, -170.08972], [0, 0, 0], [8.12, 3.94, 8.12], "de498a", 0, 0, 0.6, false, 1);
        a.p([-28.09965, 2.81035, -75.47965], [1.55, 0, 0], [5.78, 5.78, 5.78], "e1f05b", 0, 0, 0.6, false, false);
        a.p([-47.23958, -8.61958, -66.88958], [0, 0, 0], [19.42, 3.46, 10.82], "e8eaeb", 0, 0, 0.6, false, false);
        a.p([-54.40951, 8.70049, -100.66951], [0, 0, 0], [19.42, 3.46, 10.82], "e8eaeb", 0, 0, 0.6, false, false);
        a.p([0.25, -8.06, -52.9], [0, 0, 0], [21.42, 3.46, 10.82], "e8eaeb", 0.8, 0, 0.6, false, false);
        a.p([0.00007, -2.18993, -6.33993], [0, 0, 0], [19.08, 3, 13.08], "e8eaeb", 9999.0, 0, 0.6, false, false);
        a.p([-1.13986, -6.82986, -33.27986], [0, 0, 0], [14.04, 3.46, 10.82], "e8eaeb", 9999.0, 0, 0.6, false, false);
        a.p([9.43021, 0.23021, -16.73979], [0, 0, 0], [14.04, 3.46, 10.82], "e8eaeb", 9999.0, 0, 0.6, false, false);
        a.p([-27.61972, -2.16972, -103.54972], [0, 0, 0], [16.62, 6.36, 13.58], "e8eaeb", 9999.0, 0, 0.6, false, false);
        a.p([47.82035, -6.04965, -31.67965], [0, 0, 0], [21.42, 3.46, 10.82], "e8eaeb", 0, 0, 0.6, false, false);
        a.p([20.30042, -2.16958, -131.59958], [0, 0, 0], [16.62, 6.36, 21.18], "e8eaeb", 9999.0, 0, 0.6, false, false);
        a.p([-31.26951, 3.48049, -101.42951], [2.37, 0, 0], [5.78, 5.78, 5.78], "ed85eb", 0, 0, 0.6, false, true);
        a.p([36.31, -0.08, -90.98], [6.31, 0, 0], [5.78, 5.78, 5.78], "f29c8f", 0, 0, 0.6, false, false);
        a.p([-81.22993, -10.82993, -47.70993], [0, 0, 0], [23.8, 3.46, 12.36], "ffffff", 0, 0, 0.6, false, false);
        a.p([27.30014, -5.82986, -66.76986], [0, 0, 0], [14.8, 3.46, 10.78], "ffffff", 0, 0, 0.6, false, false);
        a.s([-5.89979, -8.17979, -36.72979], 7.72, "ffffff", 0, 0, 0.6, false);
        a.s([30.76028, -4.04972, -86.74972], 5.52, "ffffff", 0, 0, 0.6, false);
        a.s([24.42035, -6.53965, -65.95965], 7.72, "ffffff", 0, 0, 0.6, false);
        a.s([-26.25958, -1.42958, -103.75958], 7.28, "ffffff", 0, 0, 0.6, false);
        a.p([73.30049, 2.36049, -64.09951], [0, 0, 0], [26.88, 3.46, 17.2], "ffffff", 0, 0, 0.6, false, false);
        a.p([0.22, 8.41, -149.23], [0, 0, 0], [18.38, 3.46, 11.24], "ffffff", 0, 0, 0.6, false, false);
        a.p([-50.85993, -4.83993, -141.02993], [0, 0, 0], [16.8, 4.02, 13.22], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.41986, -7.36986, -95.06986], [0, 0, 0], [14.04, 3.46, 10.82], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([27.88021, -4.15979, -88.95979], [0, 0, 0], [25.56, 3.46, 13.58], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-13.89972, -0.77972, -24.70972], [0, 0, 0], [14.04, 3.46, 10.82], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-12.13965, -2.91965, -79.68965], [0, 0, 0], [12.42, 3.46, 8.38], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-7.96958, -4.15958, -115.51958], [0, 0, 0], [45.96, 4.9, 22.82], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-29.52951, -1.05951, -38.43951], [0, 0, 0], [14.04, 3.46, 10.82], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-12.14, -2.92, -73.66], [0, 0, 0], [19.74, 3.46, 13.58], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-28.40993, -1.36993, -76.46993], [0, 0, 0], [14.04, 3.46, 10.82], "ffffff", 9999.0, 0, 0.6, false, false);
        a.p([-24.62986, 5.37014, -150.03986], [0, 0, 0], [19.74, 3.46, 13.58], "ffffff", 9999.0, 0, 0.6, false, false);
        a.s([-0.69979, -3.71979, -69.36979], 8.94, "ffffff", 0, 0, 0.6, false);
        a.s([-15.98972, -0.67972, -25.40972], 5.38, "ffffff", 0, 0, 0.6, false);
        a.s([-10.34965, -3.20965, -75.46965], 6.92, "ffffff", 0, 0, 0.6, false);
        a.s([-4.04958, -2.77958, -77.81958], 5.18, "ffffff", 0, 0, 0.6, false);
        a.s([-29.67951, -1.39951, -104.52951], 6.46, "ffffff", 0, 0, 0.6, false);
        a.s([-0.99, -2.08, -115.75], 5.7, "ffffff", 0, 0, 0.6, false);
        a.s([-15.18993, 1.74007, -116.33993], 6.46, "ffffff", 0, 0, 0.6, false);
        a.s([19.82014, -4.51986, -85.04986], 8.94, "ffffff", 0, 0, 0.6, false);
        a.p([-40.58979, -1.93979, -19.19979], [0, 0, 0], [10.88, 3.46, 6.96], "ffffff", 0, 0, 0.6, false, false);
        a.p([49.91028, -7.04972, -127.89972], [0, 0, 0], [18.38, 5.78, 13.74], "ffffff", 0, 0, 0.6, false, false);
        a.p([56.84035, -1.61965, -96.02965], [0, 0, 0], [14.8, 3.46, 10.78], "ffffff", 0, 0, 0.6, false, false);
        a.p([-86.26958, -4.83958, -105.12958], [0, 0, 0], [27.32, 4.02, 17.16], "ffffff", 0, 0, 0.6, false, false);
        a.p([-24.62951, 5.37049, -170.51951], [0, 0, 0], [29.12, 3.46, 27.9], "ffffff", 9999.0, 0, 0.6, false, false);
        a.e([-24.53, 8.18, -172.87]);
        a.e([-30.98993, 1.77007, -101.95993]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#62bdde"));
        cc.set_monkey("radius", 3.5);
        cc.set_monkey("speed", default_speed * 0.8);
        cc.set_monkey("steer", default_steer * 1.5);
        cc.set_monkey("gravity", new BABYLON.Vector3(null, -1.8, null));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('S0', [9.19014, 5.11014, -18.45986], [0, 0, 0], [4, 4, 4]);
        a.re('S1', [11.01021, 6.54021, -14.83979], [0, 0, 0], [5.92, 5.92, 5.92]);
        a.re('S2', [-29.43972, 5.20028, -38.26972], [0, 0, 0], [5.92, 5.92, 5.92]);
        a.re('S3', [-17.69965, 1.57035, -106.41965], [0, 0, 0], [4, 4, 4]);
        a.re('S4', [16.20042, 0.75042, -94.36958], [0, 0, 0], [3.8, 3.8, 3.8]);
        a.re('S5', [-5.57951, 0.82049, -94.61951], [0, 0, 0], [8.5, 8.5, 8.5]);
        a.re('S6', [7.77, 4.28, -122.23], [0, 0, 0], [7.92, 7.92, 7.92]);
        a.re('S7', [-21.67993, 5.07007, -98.56993], [0, 0, 0], [5.22, 5.22, 5.22]);
        a.re('S8', [-32.46986, 10.32014, -147.33986], [0, 0, 0], [4, 4, 4]);
        a.re('S9', [-17.50979, 12.55021, -151.29979], [0, 0, 0], [5.92, 5.92, 5.92]);
        a.re('S10', [-19.21972, 2.80028, -78.93972], [0, 0, 0], [4.98, 4.98, 4.98]);
        a.re('S11', [0.47035, 5.16035, -52.09965], [0, 0, 0], [11.22, 11.22, 11.22]);
        a.re('S12', [5.09042, 3.33042, -51.90958], [0, 0, 0], [8.42, 8.42, 8.42]);
        a.re('S13', [-3.71951, 1.14049, -51.36951], [0, 0, 0], [6.78, 6.78, 6.78]);
        a.re('S14', [-5, 3.41, -8.9], [0, 0, 0], [4, 4, 4]);
        a.re('S15', [-26.22993, 1.57007, -112.34993], [0, 0, 0], [4, 4, 4]);
        a.re('S16', [-15.45986, 1.61014, -81.07986], [0, 0, 0], [3.38, 3.38, 3.38]);
        a.re('S17', [-47.18979, 1.18021, -67.11979], [0, 0, 0], [9.38, 9.38, 9.38]);
        a.re('P0', [-0.72972, -0.00972, -32.86972], [-1.55, 0, 0.77], [4.18, 4.18, 5.74]);
        a.re('P1', [-2.03965, -3.91965, -32.83965], [-1.55, 0, 0], [2.12, 2.94, 3.5]);
        a.re('P2', [-25.85958, 3.46042, -118.18958], [1.57, 0, 0.77], [4.18, 4.18, 5.74]);
        a.re('P3', [-24.54951, -0.45951, -118.17951], [1.57, 0, 0], [2.12, 2.94, 3.5]);
        a.re('P4', [-1.89, -0.46, -109.49], [3.12, 0, 0], [2.12, 2.94, 3.5]);
        a.re('P5', [-1.91993, 3.46007, -108.17993], [3.12, 0, 0.77], [4.18, 4.18, 5.74]);
        a.re('Y0', [9.19014, 3.18014, -18.45986], [-0.32, 0, 0], [1.08, 3.14, 1.08]);
        a.re('Y1', [11.01021, 3.69021, -14.83979], [-0.32, 0, 0], [1.22, 3.98, 1.22]);
        a.re('Y2', [-29.43972, 2.35028, -38.26972], [0, 0, 0], [1.22, 3.98, 1.22]);
        a.re('Y3', [-17.69965, -0.35965, -106.41965], [0, 0, 0], [1.08, 3.14, 1.08]);
        a.re('Y4', [16.20042, -1.06958, -94.36958], [0, 0, 0], [1.02, 2.98, 1.02]);
        a.re('Y5', [-5.57951, -3.26951, -94.61951], [0, 0, 0], [1.76, 5.7, 1.76]);
        a.re('Y6', [7.77, 0.47, -122.23], [0, 0, 0], [1.64, 5.32, 1.64]);
        a.re('Y7', [-21.67993, 2.56007, -98.56993], [0, 0, 0], [1.4, 4.1, 1.4]);
        a.re('Y8', [-32.46986, 8.39014, -147.33986], [0, 0, 0], [1.08, 3.14, 1.08]);
        a.re('Y9', [-17.50979, 9.70021, -151.29979], [0, 0, 0], [1.22, 6.44, 1.22]);
        a.re('Y10', [-19.21972, 0.39028, -78.93972], [0, 0, 0], [1.34, 3.92, 1.34]);
        a.re('Y11', [0.47035, -2.51965, -52.09965], [0, 0, 0], [2.3, 9.64, 2.3]);
        a.re('Y12', [-4.99958, 1.48042, -8.89958], [0, 0, 0], [1.08, 3.14, 1.08]);
        a.re('Y13', [-26.22951, -0.35951, -112.34951], [0, 0, 0], [1.08, 3.14, 1.08]);
        a.re('Y14', [-15.46, -0.02, -81.08], [0, 0, 0], [0.9, 2.64, 0.9]);
        a.re('Y15', [-47.18993, -3.33993, -67.11993], [0, 0, 0], [2.52, 7.36, 2.52]);
        a.re('P6', [-12.32986, 1.14014, -27.91986], [-0.33, -0.24, -0.34], [3.48, 3.48, 3.48]);
        a.re('P7', [-19.05979, 1.14021, -23.31979], [-2, -2.32, -0.68], [2.92, 2.92, 2.92]);
        a.re('P8', [-24.72972, 1.14028, -41.63972], [-3.05, -2.61, 0.31], [2.92, 2.92, 2.92]);
        a.re('P9', [-34.50965, 0.95035, -34.81965], [-2.26, -1.82, 0.64], [1.74, 1.74, 1.74]);
        a.re('P10', [-18.36958, -0.73958, -71.64958], [-1.78, -0.66, 0.57], [2.92, 2.92, 2.92]);
        a.re('P11', [-10.34951, -1.21951, -68.80951], [0, -0.93, 0.4], [2.92, 2.92, 2.92]);
        a.re('P12', [-15.19, -0.67, -124.3], [-1.09, 0.74, 0.26], [3.66, 3.66, 3.66]);
        a.re('P13', [10.70007, -1.20993, -118.93993], [-0.89, 1.81, -0.59], [3.48, 3.48, 3.48]);
        a.re('P14', [-10.22986, -1.20986, -111.13986], [0.55, 3.92, 0.27], [3.06, 3.06, 3.06]);
        a.re('P15', [17.43021, -2.15979, -91.63979], [-1.67, 4.49, -0.4], [2.3, 2.3, 2.3]);
        a.re('P16', [-3.01972, -0.92972, -121.44972], [0.79, 1.77, -0.45], [3.66, 3.66, 3.66]);
        a.re('P17', [-30.24965, 7.44035, -150.71965], [-1.1, -1.32, -0.66], [2.98, 2.98, 2.98]);
        a.re('P18', [3.47042, -0.84958, -5.49958], [-3.75, -4.12, -0.73], [2.06, 2.06, 2.06]);
        a.re('P19', [-24.55951, 9.20049, -170.57951], [0, 0, 0], [3.22, 5.5, 19.12]);
        a.re('P20', [-1.92, 0.57, -108.18], [3.12, 0, 0], [5.78, 5.78, 5.78]);
        a.re('P21', [0.21007, -0.62993, -6.30993], [0, 0, 0], [1.54, 1.22, 13.18]);
        a.re('P22', [-32.63986, 0.55014, -41.11986], [3.31, 0, 0], [1.54, 1.22, 5.7]);
        a.re('P23', [-10.44979, 0.55021, -24.13979], [1.45, 0, 0], [1.54, 1.22, 8.48]);
        a.re('P24', [-31.62972, 0.15028, -48.47972], [-0.34, 0.01, 0], [1.6, 0.84, 10.12]);
        a.re('P25', [-25.42965, 0.01035, -53.94965], [1.8, 0, 0], [1.54, 0.94, 10.52]);
        a.re('P26', [-18.16958, 0.01042, -61.59958], [2.77, 0, 0], [1.54, 0.94, 14.86]);
        a.re('P27', [7.11049, -1.60951, -81.13951], [-1.32, 0.01, 0], [1.28, 0.84, 19.78]);
        a.re('P28', [29.61, -1.87, -101.05], [-0.06, 0.17, -0.01], [1.5, 0.84, 11.1]);
        a.re('P29', [27.74007, -1.07993, -109.55993], [0.59, 0.01, 0], [1.5, 0.84, 8.7]);
        a.re('P30', [20.16014, -1.04986, -112.83986], [1.57, 0.01, 0], [1.5, 0.84, 11.6]);
        a.re('P31', [-28.23979, 7.47021, -141.16979], [-0.01, 0.01, -0.01], [1.5, 0.84, 6.04]);
        a.re('P32', [-28.29972, 5.92028, -130.50972], [0, 0.31, -0.01], [1.5, 0.84, 8.2]);
        a.re('P33', [-4.04965, 0.55035, -21.90965], [0.94, 0, 0], [1.54, 1.22, 6.38]);
        a.re('P34', [-0.81958, 0.68042, -16.54958], [0.25, 0.28, 0.03], [1.6, 0.84, 8.32]);
        a.re('P35', [-24.88951, 0.55049, -33.68951], [1.21, 0, 0], [1.54, 1.22, 6.74]);
        a.re('P36', [-30.11, 0.55, -36.74], [0.85, 0, 0], [1.54, 1.22, 6.14]);
        a.re('P37', [27.24007, -2.65993, -93.15993], [-0.64, 0.01, 0], [1.6, 0.84, 6.74]);
        a.re('P38', [-13.58986, -0.91986, -70.98986], [-0.64, 0.01, 0], [1.6, 0.84, 6.74]);
        a.re('P39', [30.77021, -1.34979, -100.80979], [-0.06, 0.01, 0], [1.28, 2.32, 10.66]);
        a.re('P40', [11.41028, 0.96028, -112.07972], [1.79, 0.54, 0], [1.5, 0.76, 8.36]);
        a.re('Y16', [-28.74965, 0.98035, -124.56965], [0, 0, 0], [4.48, 8.42, 4.48]);
        a.re('Y17', [-28.36958, 5.89042, -146.56958], [0, 0, 0], [4.48, 3.96, 4.48]);
        a.re('P41', [-21.32951, 4.69049, -120.00951], [1.07, 0.01, 0], [1.62, 1.1, 13.18]);
        a.re('Y18', [-25.68, 5.89, -149.42], [0, 0, 0], [3.26, 3.96, 3.26]);
        a.re('Y19', [-26.25993, 5.89007, -152.11993], [0, 0, 0], [2.3, 3.96, 2.3]);
        a.re('Y20', [-23.90986, 5.89014, -152.63986], [0, 0, 0], [2.44, 3.96, 2.44]);
        a.re('Y21', [-25.72979, 5.89021, -154.87979], [0, 0, 0], [3.18, 3.96, 3.18]);
        a.re('Y22', [-23.47972, 5.89028, -156.76972], [0, 0, 0], [2.64, 3.96, 2.64]);
        a.re('Y23', [-25.69965, 5.89035, -157.47965], [0, 0, 0], [1.86, 3.96, 1.86]);
        a.re('Y24', [-24.31958, 5.89042, -159.12958], [0, 0, 0], [2.26, 3.96, 2.26]);
        a.re('P42', [-24.48951, 6.74049, -170.58951], [3.14, 0.01, 0], [3.3, 1.1, 20.56]);
        a.re('P43', [-25.86, 0.57, -118.19], [1.57, 0, 0], [5.78, 5.78, 5.78]);
        a.re('P44', [-0.72993, -2.88993, -32.86993], [-1.55, 0, 0], [5.78, 5.78, 5.78]);
        a.re('Y25', [-14.37986, 13.78014, -161.64986], [0, 0, 0], [3.4, 14.46, 3.4]);
        a.re('Y26', [-34.58979, 13.78021, -161.64979], [0, 0, 0], [3.4, 14.46, 3.4]);
        a.re('Y27', [-34.58972, 13.78028, -179.15972], [0, 0, 0], [3.4, 14.46, 3.4]);
        a.re('Y28', [-14.37965, 13.78035, -179.15965], [0, 0, 0], [3.4, 14.46, 3.4]);
        a.re('Y29', [-24.43958, 16.62042, -170.08958], [0, 0, 0], [5.96, 16.14, 5.96]);
        a.re('P45', [-28.09951, 5.70049, -75.47951], [1.55, 0, 0.77], [4.18, 4.18, 5.74]);
        a.re('P46', [-26.79, 1.78, -75.46], [1.55, 0, 0], [2.12, 2.94, 3.5]);
        a.re('P47', [-31.26993, 6.37007, -101.42993], [2.37, 0, 0.77], [4.18, 4.18, 5.74]);
        a.re('P48', [-30.35986, 2.45014, -102.35986], [2.37, 0, 0], [2.12, 2.94, 3.5]);
        a.re('P49', [36.31021, 2.80021, -90.97979], [6.31, 0, 0.77], [4.18, 4.18, 5.74]);
        a.re('P50', [36.35028, -1.10972, -89.66972], [6.31, 0, 0], [2.12, 2.94, 3.5]);
        a.re('P51', [-30.08965, 12.89035, -170.51965], [0, 0, 0], [9.14, 12.46, 18.68]);
        a.re('P52', [-18.97958, 12.89042, -170.51958], [0, 0, 0], [9.3, 12.46, 18.68]);
        a.re('P53', [-24.12951, 13.88049, -170.51951], [0, 0, 0], [7.28, 10.46, 18.68]);
        a.re('Y30', [-14.38, 20.42, -161.65], [0, 0, 0], [4.62, 3.54, 4.62]);
        a.re('Y31', [-34.58993, 20.42007, -161.64993], [0, 0, 0], [4.62, 3.54, 4.62]);
        a.re('Y32', [-34.58986, 20.42014, -179.37986], [0, 0, 0], [4.62, 3.54, 4.62]);
        a.re('Y33', [-14.37979, 20.42021, -179.37979], [0, 0, 0], [4.62, 3.54, 4.62]);
        a.re('Y34', [-24.46972, 24.02028, -170.08972], [0, 0, 0], [8.12, 3.94, 8.12]);
        a.re('P54', [-28.09965, 2.81035, -75.47965], [1.55, 0, 0], [5.78, 5.78, 5.78]);
        a.re('P55', [-47.23958, -8.61958, -66.88958], [0, 0, 0], [19.42, 3.46, 10.82]);
        a.re('P56', [-54.40951, 8.70049, -100.66951], [0, 0, 0], [19.42, 3.46, 10.82]);
        a.re('P57', [0.25, -8.06, -52.9], [0, 0, 0], [21.42, 3.46, 10.82]);
        a.re('P58', [0.00007, -2.18993, -6.33993], [0, 0, 0], [19.08, 3, 13.08]);
        a.re('P59', [-1.13986, -6.82986, -33.27986], [0, 0, 0], [14.04, 3.46, 10.82]);
        a.re('P60', [9.43021, 0.23021, -16.73979], [0, 0, 0], [14.04, 3.46, 10.82]);
        a.re('P61', [-27.61972, -2.16972, -103.54972], [0, 0, 0], [16.62, 6.36, 13.58]);
        a.re('P62', [47.82035, -6.04965, -31.67965], [0, 0, 0], [21.42, 3.46, 10.82]);
        a.re('P63', [20.30042, -2.16958, -131.59958], [0, 0, 0], [16.62, 6.36, 21.18]);
        a.re('P64', [-31.26951, 3.48049, -101.42951], [2.37, 0, 0], [5.78, 5.78, 5.78]);
        a.re('P65', [36.31, -0.08, -90.98], [6.31, 0, 0], [5.78, 5.78, 5.78]);
        a.re('P66', [-81.22993, -10.82993, -47.70993], [0, 0, 0], [23.8, 3.46, 12.36]);
        a.re('P67', [27.30014, -5.82986, -66.76986], [0, 0, 0], [14.8, 3.46, 10.78]);
        a.re('S18', [-5.89979, -8.17979, -36.72979], [0, 0, 0], [7.72, 7.72, 7.72]);
        a.re('S19', [30.76028, -4.04972, -86.74972], [0, 0, 0], [5.52, 5.52, 5.52]);
        a.re('S20', [24.42035, -6.53965, -65.95965], [0, 0, 0], [7.72, 7.72, 7.72]);
        a.re('S21', [-26.25958, -1.42958, -103.75958], [0, 0, 0], [7.28, 7.28, 7.28]);
        a.re('P68', [73.30049, 2.36049, -64.09951], [0, 0, 0], [26.88, 3.46, 17.2]);
        a.re('P69', [0.22, 8.41, -149.23], [0, 0, 0], [18.38, 3.46, 11.24]);
        a.re('P70', [-50.85993, -4.83993, -141.02993], [0, 0, 0], [16.8, 4.02, 13.22]);
        a.re('P71', [-7.41986, -7.36986, -95.06986], [0, 0, 0], [14.04, 3.46, 10.82]);
        a.re('P72', [27.88021, -4.15979, -88.95979], [0, 0, 0], [25.56, 3.46, 13.58]);
        a.re('P73', [-13.89972, -0.77972, -24.70972], [0, 0, 0], [14.04, 3.46, 10.82]);
        a.re('P74', [-12.13965, -2.91965, -79.68965], [0, 0, 0], [12.42, 3.46, 8.38]);
        a.re('P75', [-7.96958, -4.15958, -115.51958], [0, 0, 0], [45.96, 4.9, 22.82]);
        a.re('P76', [-29.52951, -1.05951, -38.43951], [0, 0, 0], [14.04, 3.46, 10.82]);
        a.re('P77', [-12.14, -2.92, -73.66], [0, 0, 0], [19.74, 3.46, 13.58]);
        a.re('P78', [-28.40993, -1.36993, -76.46993], [0, 0, 0], [14.04, 3.46, 10.82]);
        a.re('P79', [-24.62986, 5.37014, -150.03986], [0, 0, 0], [19.74, 3.46, 13.58]);
        a.re('S22', [-0.69979, -3.71979, -69.36979], [0, 0, 0], [8.94, 8.94, 8.94]);
        a.re('S23', [-15.98972, -0.67972, -25.40972], [0, 0, 0], [5.38, 5.38, 5.38]);
        a.re('S24', [-10.34965, -3.20965, -75.46965], [0, 0, 0], [6.92, 6.92, 6.92]);
        a.re('S25', [-4.04958, -2.77958, -77.81958], [0, 0, 0], [5.18, 5.18, 5.18]);
        a.re('S26', [-29.67951, -1.39951, -104.52951], [0, 0, 0], [6.46, 6.46, 6.46]);
        a.re('S27', [-0.99, -2.08, -115.75], [0, 0, 0], [5.7, 5.7, 5.7]);
        a.re('S28', [-15.18993, 1.74007, -116.33993], [0, 0, 0], [6.46, 6.46, 6.46]);
        a.re('S29', [19.82014, -4.51986, -85.04986], [0, 0, 0], [8.94, 8.94, 8.94]);
        a.re('P80', [-40.58979, -1.93979, -19.19979], [0, 0, 0], [10.88, 3.46, 6.96]);
        a.re('P81', [49.91028, -7.04972, -127.89972], [0, 0, 0], [18.38, 5.78, 13.74]);
        a.re('P82', [56.84035, -1.61965, -96.02965], [0, 0, 0], [14.8, 3.46, 10.78]);
        a.re('P83', [-86.26958, -4.83958, -105.12958], [0, 0, 0], [27.32, 4.02, 17.16]);
        a.re('P84', [-24.62951, 5.37049, -170.51951], [0, 0, 0], [29.12, 3.46, 27.9]);
        a.re('E0', [-24.53, 8.18, -172.87], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [-30.98993, 1.77007, -101.95993], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}

var canvas = document.getElementById("threebody");
if (canvas) {
    let dt = 0.00000003;
    let wid = window.innerWidth;
    let hei = window.innerHeight;
    canvas.width = wid
    canvas.height = hei
    var ctx = canvas.getContext("2d");
    // Set up the three bodies
    var body1 = {
        x: Math.random() * wid,
        y: Math.random() * hei,
        vx: 0.01,
        vy: 0,
        mass: 50,
        radius: 7,
        color: "red"
    };
    var body2 = {
        x: Math.random() * wid,
        y: Math.random() * hei,
        vx: -0.01,
        vy: -0.01,
        mass: 50,
        radius: 7,
        color: '#ff9500'
    };
    var body3 = {
        x: Math.random() * wid,
        y: Math.random() * hei,
        vx: 0,
        vy: 0.01,
        mass: 50,
        radius: 7,
        color: "green"
    };
    // Set up the forces
    var G = 1;
    // Draw the bodies
    function drawBodies() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(body1.x, body1.y, body1.radius, 0, 2 * Math.PI);
        ctx.fillStyle = body1.color;
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(body2.x, body2.y, body2.radius, 0, 2 * Math.PI);
        ctx.fillStyle = body2.color;
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(body3.x, body3.y, body3.radius, 0, 2 * Math.PI);
        ctx.fillStyle = body3.color;
        ctx.fill();
        ctx.closePath();
    }
    // Calculate the forces
    function calculateForces() {
        let pow = 2;
        // Calculate the force between body1 and body2
        var dx = body2.x - body1.x;
        var dy = body2.y - body1.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var force = G * body1.mass * body2.mass / (dist ** pow);
        var ax = force * dx / dist;
        var ay = force * dy / dist;
        // Apply the force to body1
        body1.vx += ax / body1.mass;
        body1.vy += ay / body1.mass;
        body2.vx += -ax / body2.mass;
        body2.vy += -ay / body2.mass;
        // Calculate the force between body2 and body3
        dx = body3.x - body2.x;
        dy = body3.y - body2.y;
        dist = Math.sqrt(dx * dx + dy * dy);
        force = G * body2.mass * body3.mass / (dist ** pow);
        ax = force * dx / dist;
        ay = force * dy / dist;
        // Apply the force to body2
        body2.vx += ax / body2.mass;
        body2.vy += ay / body2.mass;
        body3.vx += -ax / body3.mass;
        body3.vy += -ay / body3.mass;
        // Calculate the force between body3 and body1
        dx = body1.x - body3.x;
        dy = body1.y - body3.y;
        dist = Math.sqrt(dx * dx + dy * dy);
        force = G * body3.mass * body1.mass / (dist ** pow);
        ax = force * dx / dist;
        ay = force * dy / dist;
        // Apply the force to body3
        body3.vx += ax / body3.mass;
        body3.vy += ay / body3.mass;
        body1.vx += -ax / body1.mass;
        body1.vy += -ay / body1.mass;
    }
    // Update the positions
    function updatePositions() {
        body1.x += body1.vx * dt;
        body1.y += body1.vy * dt;
        body2.x += body2.vx * dt;
        body2.y += body2.vy * dt;
        body3.x += body3.vx * dt;
        body3.y += body3.vy * dt;
    }
    // Main loop
    function loop() {
        for (i = 0; i < 100000; i++) {
            calculateForces();
            updatePositions();
        }
        drawBodies();
        requestAnimationFrame(loop);
    }
    // Start the loop
    loop();
}
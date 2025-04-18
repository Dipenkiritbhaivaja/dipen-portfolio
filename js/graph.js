var ctx = document.getElementById("resultChart").getContext("2d");
document.getElementById("resultChart").width = 500;
document.getElementById("resultChart").height = 350;

// Static gradient - orange to green (bottom to top)
function createGradient(ctx, height) {
    const gradient = ctx.createLinearGradient(0, height, 0, 0);
    gradient.addColorStop(0, '#FF8C00');  // Dark Orange (bottom)
    gradient.addColorStop(0.5, '#FFD700'); // Gold (middle)
    gradient.addColorStop(1, '#32CD32');  // Lime Green (top)
    return gradient;
}

var gradients = [
    createGradient(ctx, 300),
    createGradient(ctx, 300),
    createGradient(ctx, 300)
];

var resultChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Sem 3", "Sem 4", "Sem 5"],
        datasets: [{
            label: "CGPA",
            data: [8.84, 9.30, 9.64],
            backgroundColor: gradients,
            borderColor: "rgba(255, 255, 255, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
            barThickness: 30
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'ACADEMIC PERFORMANCE',
                color: '#FFD700',
                font: {
                    size: 24,
                    weight: 'bold',
                    family: "'Arial', sans-serif"
                },
                padding: {
                    top: 15,
                    bottom: 25
                }
            },
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                titleColor: "#FFD700",
                bodyColor: "white",
                borderColor: "#FFA500",
                borderWidth: 2,
                cornerRadius: 6,
                bodyFont: {
                    size: 14
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 8.0,
                max: 10.0,
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    },
                    stepSize: 0.2,
                    callback: function (value) {
                        return value.toFixed(1); // Format as 8.0, 8.2, etc.
                    }
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.15)",
                    lineWidth: 1
                }
            },
            x: {
                ticks: {
                    color: "#FFD700",
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    }
});
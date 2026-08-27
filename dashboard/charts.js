// ApexCharts initialization for Analytics Dashboard
function initializeCharts() {
    // Base chart options for dark theme
    const baseOptions = {
        chart: {
            fontFamily: '-apple-system, BlinkMacSystemFont, Inter, Segoe UI, sans-serif',
            foreColor: '#666',
            background: 'transparent',
            toolbar: { show: false },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800
            }
        },
        theme: {
            mode: 'dark'
        },
        grid: {
            borderColor: '#222',
            strokeDashArray: 3
        },
        tooltip: {
            theme: 'dark',
            style: { fontSize: '12px' }
        },
        dataLabels: { enabled: false }
    };

    // Overall Views Chart
    new ApexCharts(document.querySelector("#overall-views-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 200 },
        series: [{ name: 'Total Views', data: [18000, 21000, 26500, 24200, 32200, 37400, 47382] }],
        xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
        yaxis: { labels: { formatter: (val) => val.toLocaleString() } },
        colors: ['#3344ff'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.1 } },
        stroke: { curve: 'smooth', width: 3 }
    }).render();

    // YOUTUBE
    new ApexCharts(document.querySelector("#youtube-views-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Views', data: [2400, 2200, 2800, 2600, 3200, 3500, 3800] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#4a7fa5'],
        fill: { type: 'gradient', gradient: { shade: 'dark', type: 'vertical', gradientToColors: ['#6b9fc4'] } }
    }).render();

    new ApexCharts(document.querySelector("#youtube-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 140 },
        series: [{ name: 'Engagement Rate', data: [4.2, 4.4, 4.6, 4.3, 4.8, 4.9, 4.8] }],
        xaxis: { categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#4a7fa5'],
        stroke: { curve: 'smooth', width: 2 }
    }).render();

    new ApexCharts(document.querySelector("#youtube-subscribers-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [{ name: 'New Subscribers', data: [120, 135, 145, 138, 162, 148, 180] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#4a7fa5'],
        stroke: { curve: 'straight', width: 3 },
        markers: { size: 5, colors: ['#4a7fa5'], strokeWidth: 2 }
    }).render();

    new ApexCharts(document.querySelector("#youtube-traffic-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'donut', height: 140 },
        series: [42, 31, 15, 12],
        labels: ['Search', 'Suggested', 'Browse', 'External'],
        colors: ['#4a7fa5', '#5c8db5', '#7099bb', '#89a8c8'],
        legend: { show: true, position: 'bottom', fontSize: '11px' },
        plotOptions: { pie: { donut: { size: '65%' } } }
    }).render();

    // INSTAGRAM
    new ApexCharts(document.querySelector("#instagram-reach-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Reach', data: [1800, 2200, 2400, 2100, 2900, 3100, 3300] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#9b59b6'],
        fill: { type: 'gradient', gradient: { gradientToColors: ['#b87fc9'] } }
    }).render();

    new ApexCharts(document.querySelector("#instagram-post-types-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Engagement', data: [920, 580, 340] }],
        plotOptions: { bar: { horizontal: true, borderRadius: 6, distributed: true } },
        xaxis: { categories: ['Reels', 'Carousel', 'Single Image'] },
        colors: ['#9b59b6', '#8e4fa8', '#7a4291'],
        legend: { show: false }
    }).render();

    new ApexCharts(document.querySelector("#instagram-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [{ name: 'Engagement Rate', data: [11.2, 12.1, 11.8, 13.4, 12.9, 13.8, 13.6] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#9b59b6'],
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 5 }
    }).render();

    new ApexCharts(document.querySelector("#instagram-story-feed-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [
            { name: 'Stories', data: [1200, 1400, 1500, 1300, 1800, 1900, 2000] },
            { name: 'Feed', data: [1600, 1800, 1900, 1700, 2100, 2200, 2400] }
        ],
        plotOptions: { bar: { borderRadius: 6 } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#7b68a8', '#9b59b6'],
        legend: { show: true, position: 'top' }
    }).render();

    // TIKTOK
    new ApexCharts(document.querySelector("#tiktok-views-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Views', data: [950, 1200, 1100, 1450, 1600, 1750, 1950] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#e94057'],
        fill: { type: 'gradient', gradient: { gradientToColors: ['#ff6b7d'] } }
    }).render();

    new ApexCharts(document.querySelector("#tiktok-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 140 },
        series: [{ name: 'Engagement Rate', data: [13.2, 14.5, 14.1, 15.8, 15.2, 16.4, 15.1] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#e94057'],
        stroke: { curve: 'smooth', width: 2 }
    }).render();

    new ApexCharts(document.querySelector("#tiktok-traffic-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'donut', height: 140 },
        series: [68, 22, 10],
        labels: ['For You Page', 'Following', 'Profile'],
        colors: ['#e94057', '#f55969', '#ff7a89'],
        legend: { show: true, position: 'bottom' },
        plotOptions: { pie: { donut: { size: '65%' } } }
    }).render();

    new ApexCharts(document.querySelector("#tiktok-watchtime-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [{ name: 'Avg Watch Time (sec)', data: [18, 21, 19, 24, 23, 26, 25] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val + 's' } },
        colors: ['#e94057'],
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 5 }
    }).render();

    // TWITTER
    new ApexCharts(document.querySelector("#twitter-impressions-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Impressions', data: [380, 350, 480, 520, 460, 620, 710] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#888888'],
        fill: { type: 'gradient', gradient: { gradientToColors: ['#aaaaaa'] } }
    }).render();

    new ApexCharts(document.querySelector("#twitter-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 140 },
        series: [{ name: 'Engagement Rate', data: [5.8, 6.1, 5.9, 6.7, 6.3, 6.9, 6.4] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#888888'],
        stroke: { curve: 'smooth', width: 2 }
    }).render();

    new ApexCharts(document.querySelector("#twitter-tweet-types-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Avg Engagement', data: [45, 38, 32, 24] }],
        plotOptions: { bar: { horizontal: true, borderRadius: 6, distributed: true } },
        xaxis: { categories: ['Threads', 'Media', 'Polls', 'Text'] },
        colors: ['#888888', '#999999', '#aaaaaa', '#bbbbbb'],
        legend: { show: false }
    }).render();

    new ApexCharts(document.querySelector("#twitter-actions-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [
            { name: 'Link Clicks', data: [28, 24, 38, 42, 36, 48, 54] },
            { name: 'Likes', data: [52, 48, 64, 68, 58, 78, 84] }
        ],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#5599ff', '#888888'],
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 4 },
        legend: { show: true, position: 'top' }
    }).render();
}

// Initialize charts when DOM is ready
window.addEventListener('DOMContentLoaded', initializeCharts);

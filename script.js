document.addEventListener('DOMContentLoaded', function () {
    const data = [
        {
            name: 'Aceh',
            latitude: 4.695135,
            longitude: 96.7493993,
            lead: 'Diah Fitri',
            numOfMembers: 10,
            activeMembers: 6,
            nonActiveMembers: 2
        },
        {
            name: 'Sumatra Utara',
            latitude: 2.1153547,
            longitude: 99.5450974,
            lead: 'Wimaslina',
            numOfMembers: 12,
            activeMembers: 9,
            nonActiveMembers: 3
        },
        {
            name: 'Sumatra Barat',
            latitude: -0.7399397,
            longitude: 100.8000051,
            lead: 'Jusmawati',
            numOfMembers: 18,
            activeMembers: 10,
            nonActiveMembers: 8
        },
        {
            name: 'Riau',
            latitude: 0.2933469,
            longitude: 101.7068294,
            lead: 'Wulan',
            numOfMembers: 10,
            activeMembers: 5,
            nonActiveMembers: 5
        },
        {
            name: 'Kep. Riau',
            latitude: 3.945651,
            longitude: 108.142867,
            lead: 'Nurlia',
            numOfMembers: 6,
            activeMembers: 3,
            nonActiveMembers: 3
        },
        {
            name: 'Kep. Bangka Belitung',
            latitude: -2.7410513,
            longitude: 106.4405872,
            lead: 'Yuli',
            numOfMembers: 6,
            activeMembers: 2,
            nonActiveMembers: 4
        },
        {
            name: 'Jambi',
            latitude: -1.4851831,
            longitude: 102.4380581,
            lead: 'Hazrawerni',
            numOfMembers: 4,
            activeMembers: 2,
            nonActiveMembers: 2
        },
        {
            name: 'Bengkulu',
            latitude: -3.5778471,
            longitude: 102.3463875,
            lead: 'Martina',
            numOfMembers: 14,
            activeMembers: 7,
            nonActiveMembers: 3
        },
        {
            name: 'Lampung',
            latitude: -4.5585849,
            longitude: 105.4068079,
            lead: 'Imronah',
            numOfMembers: 5,
            activeMembers: 3,
            nonActiveMembers: 2
        },
        {
            name: 'Banten',
            latitude: -6.4058172,
            longitude: 106.0640179,
            lead: 'Faizah',
            numOfMembers: 4,
            activeMembers: 2,
            nonActiveMembers: 2
        },
        {
            name: 'Jawa Barat',
            latitude: -7.090911,
            longitude: 107.668887,
            lead: 'Kokom',
            numOfMembers: 11,
            activeMembers: 8,
            nonActiveMembers: 3 / 2
        },
        {
            name: 'DKI Jakarta',
            latitude: -6.211544,
            longitude: 106.845172,
            lead: 'Tuti',
            numOfMembers: 12,
            activeMembers: 8,
            nonActiveMembers: 4
        },
        {
            name: 'Jawa Tengah',
            latitude: -7.150975,
            longitude: 110.1402594,
            lead: 'Fatimah',
            numOfMembers: 4,
            activeMembers: 2,
            nonActiveMembers: 2
        },
        {
            name: 'D.I Yogyakarta',
            latitude: -7.797068,
            longitude: 110.370529,
            lead: 'Triyani',
            numOfMembers: 15,
            activeMembers: 12,
            nonActiveMembers: 3
        },
        {
            name: 'Jawa Timur',
            latitude: -7.5360639,
            longitude: 112.2384017,
            lead: 'Budiyati',
            numOfMembers: 12,
            activeMembers: 8,
            nonActiveMembers: 4
        },
        {
            name: 'Bali',
            latitude: -8.4095178,
            longitude: 115.188916,
            lead: 'Mamnuah',
            numOfMembers: 7,
            activeMembers: 3,
            nonActiveMembers: 4
        },
        {
            name: 'Kalimantan Timur',
            latitude: 0.538659,
            longitude: 116.419389,
            lead: 'Sulastri',
            numOfMembers: 6,
            activeMembers: 4,
            nonActiveMembers: 2
        },
        {
            name: 'Kalimantan Selatan',
            latitude: -3.0926415,
            longitude: 115.2837585,
            lead: 'Masruroh',
            numOfMembers: 5,
            activeMembers: 5,
            nonActiveMembers: 0
        },
        {
            name: 'Kalimantan Barat',
            latitude: -0.278781,
            longitude: 111.475285,
            lead: 'Nurini',
            numOfMembers: 6,
            activeMembers: 5,
            nonActiveMembers: 1
        },
        {
            name: 'Kalimantan Tengah',
            latitude: -1.681488,
            longitude: 113.382355,
            lead: 'Shofia',
            numOfMembers: 3,
            activeMembers: 1,
            nonActiveMembers: 2
        },
        {
            name: 'Kalimantan Utara',
            latitude: 3.07309,
            longitude: 116.04139,
            lead: 'Wiwikwahyu',
            numOfMembers: 7,
            activeMembers: 4,
            nonActiveMembers: 3
        },
        {
            name: 'Sulawesi Selatan',
            latitude: -5.135399,
            longitude: 119.423790,
            lead: 'Rosmiyati',
            numOfMembers: 15,
            activeMembers: 10,
            nonActiveMembers: 5
        },
        {
            name: 'Sulawesi Utara',
            latitude: 0.624693,
            longitude: 123.974998,
            lead: 'Norma Mangkarto',
            numOfMembers: 4,
            activeMembers: 3,
            nonActiveMembers: 1
        },
        {
            name: 'Sulawesi Tengah',
            latitude: -1.430025,
            longitude: 121.445618,
            lead: 'Zulaihah',
            numOfMembers: 6,
            activeMembers: 2,
            nonActiveMembers: 4
        },
        {
            name: 'Sulawesi Tenggara',
            latitude: -4.144910,
            longitude: 122.174605,
            lead: 'Roswati',
            numOfMembers: 6,
            activeMembers: 3,
            nonActiveMembers: 3
        },
        {
            name: 'Gorontalo',
            latitude: 0.556174,
            longitude: 123.058548,
            lead: 'Nikmah Paneo',
            numOfMembers: 6,
            activeMembers: 4,
            nonActiveMembers: 2
        },
        {
            name: 'Sulawesi Barat',
            latitude: -2.844137,
            longitude: 119.232078,
            lead: '-',
            numOfMembers: '-',
            activeMembers: '-',
            nonActiveMembers: '-'
        },
        {
            name: 'Nusa Tenggara Barat (NTB)',
            latitude: -8.652933,
            longitude: 117.361648,
            lead: 'Mardhiyah',
            numOfMembers: 4,
            activeMembers: 4,
            nonActiveMembers: 0
        },
        {
            name: 'Nusa Tenggara Timur (NTT)',
            latitude: -8.657382,
            longitude: 121.079371,
            lead: "'Aisyah Usman",
            numOfMembers: 10,
            activeMembers: 9,
            nonActiveMembers: 1
        },
        {
            name: 'Maluku',
            latitude:  -3.654703,
            longitude: 128.190643,
            lead: 'Sri Raihan Holle',
            numOfMembers: 8,
            activeMembers: 5,
            nonActiveMembers: 3
        },
        {
            name: 'Maluku Utara',
            latitude: 1.570999,
            longitude: 127.808769,
            lead: 'Kalsum Kabalmay',
            numOfMembers: 9,
            activeMembers: 7,
            nonActiveMembers: 2
        },
        {
            name: 'Papua',
            latitude:  -4.045911,
            longitude: 139.248353,
            lead: 'Ringrut',
            numOfMembers: 8,
            activeMembers: 5,
            nonActiveMembers: 3
        },
        {
            name: 'Papua Barat',
            latitude: -1.336115,
            longitude: 133.174716,
            lead: 'Andri Wasaraka',
            numOfMembers: 3,
            activeMembers: 2,
            nonActiveMembers: 1
        }
        
    ];

    const map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const indonesiaBounds = [
        [5.904496, 95.293028], // Southwesternmost point (Aceh)
        [0.773944, 95.293028], // Southeasternmost point (Aceh)
        [5.904496, 141.019444], // Northeasternmost point (Papua)
        [-8.892790, 141.019444] // Northwesternmost point (Papua)
    ];

    // Set the map view to fit the bounds of Indonesia
    map.fitBounds(indonesiaBounds); 

    data.forEach(location => {
        const marker = L.marker([location.latitude, location.longitude])
            .addTo(map)
            .bindTooltip(`<b>${location.name}</b><br>Ketua: ${location.lead}<br>Jumlah anggota: ${location.numOfMembers}<br>Anggota aktif: ${location.activeMembers}<br>Anggota non-aktif: ${location.nonActiveMembers}`)

        marker.on('mouseover', function () {
            // Menampilkan tooltip saat dihover pada marker
            marker.openTooltip();
        });

        marker.on('mouseout', function () {
            // Menyembunyikan tooltip saat mouse tidak lagi dihover pada marker
            marker.closeTooltip();
        });
    });
});

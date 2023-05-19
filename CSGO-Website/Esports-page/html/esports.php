<!DOCTYPE html>
<html>

<head>
    <title>E-Sports</title>
    <link rel="icon" type="image/x-icon" href="../../Website-Images/CSGO-Logo.png">
    <link rel="stylesheet" type="text/css" href="../../css/style.css">
    <script src="../../javascript/javascript.js"></script>
</head>

<body>
    <header class="top-header">
        <div id="main">
            <button class="openbtn" onclick="openNav()">&#9776;</button>
        </div>
        <h1>Counter Strike: Global Offensive</h1>
        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&laquo;</a>
            <a href="../../Index/html/index.html">Home</a>
            <a href="../../Weapons-page/html/weapons.html">Weapons</a>
            <a href="../../Esports-page/html/esports.html">E-Sports</a>
            <a href="../../Maps-page/html/maps.html">Maps</a>
        </div>
    </header>
    <main>

        <div id="page" style="background-color: rgb(0, 0, 20); margin-left:20%; margin-right:20%;">
            <p>du mensch</p>

            <div id="headlogo">
                <img src="../../Esports-page/Images/CSGO-Logo.png" alt="csgo" width="4%" height="4%">
            </div>
            <div id="topteamstitle">
                <h1 class="teamTextColor">Top 10 Teams</h1>
            </div>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th></th>
                            <th>Team Name</th>
                            <th>Total Earnings</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Heroic.png" width="5%"
                                    height="5%">
                            </td>
                            <td>HEROIC</td>
                            <td>$2,829,372</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/FaZe_Clan.png" width="5%"
                                    height="5%">
                            </td>
                            <td>FaZe Clan</td>
                            <td>$7,060,597</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Team_Vitality.png" width="5%"
                                    height="5%"></td>
                            <td>Team Vitality</td>
                            <td>$2,892,705</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Natus_Vincere.png" width="5%"
                                    height="5%"></td>
                            <td>Natus Vincere</td>
                            <td>$9,479,809</td>
                            <td>CIS</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/G2_Esports.png" width="5%"
                                    height="5%"></td>
                            <td>G2 Esports</td>
                            <td>$4,451,259</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#6</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Cloud9.png" width="5%"
                                    height="5%">
                            </td>
                            <td>Cloud9</td>
                            <td>$3,113,876</td>
                            <td>CIS</td>
                        </tr>
                        <tr>
                            <td>#7</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/FURIA_Esports.png" width="5%"
                                    height="5%"></td>
                            <td>FURIA Esports</td>
                            <td>$1,583,275</td>
                            <td>North America</td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Team_Liquid.png" width="5%"
                                    height="5%"></td>
                            <td>Team Liquid</td>
                            <td>$5,828,569</td>
                            <td>North America</td>
                        </tr>
                        <tr>
                            <td>#9</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/ENCE.png" width="5%" height="5%">
                            </td>
                            <td>ENCE</td>
                            <td>$1,720,260</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#10</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/PaiN_Gaming.png" width="5%"
                                    height="5%"></td>
                            <td>paiN Gaming</td>
                            <td>$1,695,181</td>
                            <td>North America</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="teamsChanges">
                <dl id="newsTeamsChanges" class="teamTextColor">
                    <dd>
                        +++
                        HEROIC move up from #3 to #1 and get ahead of FaZe Clan and Team Vitality
                    </dd>
                    <dd>
                        +++
                        FaZe Clan loses rank #1 and drops to #2
                    </dd>
                    <dd>
                        +++
                        Team Vitality #6 -> #3 (ahead of Natus Vincere, G2 Esports and Cloud9)
                    </dd>
                    <dd>
                        +++
                        G2 Esports loses rank #2 and drops to #5
                    </dd>
                    <dd>
                        +++
                        FURIA Esports rise from #9 to #7 and get ahead of Team Liquid and ENCE
                    </dd>
                </dl>
            </div>

        </div>
    </main>
    <div>
        <?php 
            // MySQL-Datenbankverbindung erstellen 
            $verbindung = mysqli_connect('89.58.47.144', '2GIN', '!43L[rjz4Dj64o5v', 'dbSchule');
            // Überprüfen, ob die Verbindung erfolgreich war 
            if (!$verbindung) { die('Verbindungsfehler: ' . mysqli_connect_error());
            }
            // SQL-Abfrage erstellen 
            $sql = "SELECT * FROM tblSchueler";
            // SQL-Abfrage ausführen 
            $resultat = mysqli_query($verbindung, $sql);
            // Überprüfen, ob die Abfrage erfolgreich war 
            if (mysqli_num_rows($resultat) > 0) { 
                // Ergebnisse ausgeben 
                while($row = mysqli_fetch_assoc($resultat)) { 
                    echo "ID: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
                }
            } else { 
                echo "Keine Ergebnisse";
            }
            // Verbindung schließen 
            mysqli_close($verbindung);
        ?>
    </div>
</body>
<footer>
    <p>&copy; 2023 Counter Strike: Global Offensive</p>
</footer>

</html>
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
        <div style="background-color: rgb(0, 0, 20); margin-left:20%; margin-right:20%;">
            <div id="headlogo" alt="Image not Found!" style="padding-top: 3%;">
                <img src="../../Esports-page/Images/CSGO-Logo.png" alt="csgo" width="7%" height="7%">
            </div>
            <!-- Die 10 besten Teams -->
            <div id="headlogo">
                <h1 id="teamTextColor">Top 10 Teams</h1>
            </div>
            <div>
                <table id="top10" style="width: 100%; font-size: 23px;">
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
                            <td class="teamImage"><img src="../../Esports-page/Images/Team_Vitality.png" width="5%"
                                    height="5%" alt="Image not Found!"></td>
                            <td>Team Vitality</td>
                            <td>$2,892,705</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Heroic.png" width="5%" height="5%"
                                    alt="Image not Found!">
                            </td>
                            <td>HEROIC</td>
                            <td>$2,829,372</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/FaZe_Clan.png" width="5%"
                                    height="5%" alt="Image not Found!">
                            </td>
                            <td>FaZe Clan</td>
                            <td>$7,060,597</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Natus_Vincere.png" width="5%"
                                    height="5%" alt="Image not Found!"></td>
                            <td>Natus Vincere</td>
                            <td>$9,479,809</td>
                            <td>CIS</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Cloud9.png" width="5%" height="5%"
                                    alt="Image not Found!">
                            </td>
                            <td>Cloud9</td>
                            <td>$3,113,876</td>
                            <td>CIS</td>
                        </tr>
                        <tr>
                            <td>#6</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/G2_Esports.png" width="5%"
                                    height="5%" alt="Image not Found!"></td>
                            <td>G2 Esports</td>
                            <td>$4,451,259</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#7</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/GamerLegion.png" width="5%"
                                    height="5%" alt="Image not Found!"></td>
                            <td>GamerLegion</td>
                            <td>$453,755</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Team_Liquid.png" width="5%"
                                    height="5%" alt="Image not Found!"></td>
                            <td>Team Liquid</td>
                            <td>$5,828,569</td>
                            <td>North America</td>
                        </tr>
                        <tr>
                            <td>#9</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Apeks.png" width="5%" height="5%"
                                    alt="Image not Found!"></td>
                            <td>Apeks</td>
                            <td>$283,130</td>
                            <td>Europe</td>
                        </tr>
                        <tr>
                            <td>#10</td>
                            <td class="teamImage"><img src="../../Esports-page/Images/Monte.png" width="5%" height="5%"
                                    alt="Image not Found!"></td>
                            <td>Monte</td>
                            <td>$197,985</td>
                            <td>CIS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <br>
            <!-- Bestenliste aktualisierung -->
            <div id="teamsChanges">
                <dl>
                    <dd>
                        +++
                        Wicadia transfers from Eternal Fire Academy to Eternal Fire
                        <p>Apr 24th 2023</p>
                    </dd>
                    <dd>
                        +++
                        xfl0ud is benched on Eternal Fire
                        <p>Apr 24th 2023</p>
                    </dd>
                    <dd>
                        +++
                        Altekz transfers from Astralis Talent to Astralis
                        <p>Apr 17th 2023</p>
                    </dd>
                    <dd>
                        +++
                        Xyp9x transfers from Astralis to Astralis Talent
                        <p>Apr 17th 2023</p>
                    </dd>
                    <dd>
                        +++
                        KaiR0N- parts ways with Virtus.pro
                        <p>Apr 14th 2023</p>
                    </dd>
                </dl>
            </div>
            <br>
            <br>
        </div>
    </main>
    <!-- MySQL-Datenbankverbindung Eport Teams -->
    <div id="datenbank" style="background-color: rgb(0, 0, 20); margin-left:20%; margin-right:20%; font-size:100%;">
        <?php
        // MySQL-Datenbankverbindung erstellen 
        $verbindung = mysqli_connect('89.58.47.144', '2GIN', '!43L[rjz4Dj64o5v', 'dbSchule');
        // Überprüfen, ob die Verbindung erfolgreich war 
        echo "<div id='sql'>";
        if (!$verbindung) {
            die('Verbindungsfehler: ' . mysqli_connect_error());
        }
        echo "</div>";
        // SQL-Abfrage erstellen 
        $sql = "SELECT * FROM tbEsportTeams";
        // SQL-Abfrage ausführen 
        $resultat = mysqli_query($verbindung, $sql);
        ?>
        <div>
            <table id="allteams" style="width: 90%;">
                <!-- style="text-align:center; padding: 15px;"     style="border-collapse: collapse; border: 2px solid darkblue;" -->
                <tr style="background-color:darkblue; color: orange; text-align: left; font-size: 19px;">
                    <th>Team</th>
                    <th>Coach</th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Player 3</th>
                    <th>Player 4</th>
                    <th>Player 5</th>
                </tr>
                <?php
                // Überprüfen, ob die Abfrage erfolgreich war 
                if (mysqli_num_rows($resultat) > 0) {
                    // Ergebnisse ausgeben 
                    while ($row = mysqli_fetch_assoc($resultat)) {
                        ?>
                        <tr>
                            <!-- Abrufen von Daten aus jeder Zeile und jeder Spalte   style="border: 1px solid rgb(0, 0, 59);" -->
                            <td>
                                <?php echo $row["TeamName"]; ?>
                            </td>
                            <td>
                                <?php echo $row["TeamCoach"]; ?>
                            </td>
                            <td>
                                <?php echo $row["Player1"]; ?>
                            </td>
                            <td>
                                <?php echo $row["Player2"]; ?>
                            </td>
                            <td>
                                <?php echo $row["Player3"]; ?>
                            </td>
                            <td>
                                <?php echo $row["Player4"]; ?>
                            </td>
                            <td>
                                <?php echo $row["Player5"]; ?>
                            </td>
                        </tr>
                        <?php
                    }
                } else {
                    echo "Keine Ergebnisse";
                }
                // Verbindung schließen 
                mysqli_close($verbindung);
                ?>
            </table>
            <br>
            <br>
        </div>
    </div>
</body>
<footer>
    <p>&copy; 2023 Counter Strike: Global Offensive</p>
</footer>

</html>
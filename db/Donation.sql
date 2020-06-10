CREATE TABLE Donations(
DonationID INTEGER PRIMARY KEY,
DonorID INTEGER,
CategoryName TEXT,
DonationUnits INTEGER,
DonationTotalDollars DOUBLE,
StoreID INTEGER,
DateTime DATETIME DEFAULT current_timestamp);

INSERT INTO Donations
(DonorID, CategoryName, DonationUnits, DonationTotalDollars, StoreID)
VALUES (1, "Clothes", 5, 20, 3);

SELECT * FROM Donations;

INSERT INTO Donations (DonorID, CategoryName, DonationUnits, DonationTotalDollars, StoreID)
 VALUES (1 , 'Clothes', 23, 34, 45);
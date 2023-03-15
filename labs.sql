-- Create the Admin table
CREATE TABLE Admin
(
    AdminID INTEGER PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- Create the Lab table
CREATE TABLE Lab
(
    LabID INTEGER PRIMARY KEY,
    LabName VARCHAR(255) NOT NULL,
    LabLocation VARCHAR(255) NOT NULL,
    LabManagerID INTEGER,
    FOREIGN KEY (LabManagerID) REFERENCES LabManager(LabManagerID)
);

-- Create the LabManager table
CREATE TABLE LabManager
(
    LabManagerID INTEGER PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    FOREIGN KEY (AdminID) REFERENCES Admin(AdminID)
);

-- Create the Device table
CREATE TABLE Device
(
    DeviceID INTEGER PRIMARY KEY,
    DeviceName VARCHAR(255) NOT NULL,
    DeviceType VARCHAR(255) NOT NULL,
    DeviceImage BLOB,
    LabID INTEGER NOT NULL,
    FOREIGN KEY (LabID) REFERENCES Lab(LabID)
);

-- Create the User table
CREATE TABLE User (
    UserID INTEGER PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    UniversityID VARCHAR(255) NOT NULL,
    UserType ENUM('Undergraduate', 'Postgraduate', 'Professor') NOT NULL
);

-- Create the Registration table
CREATE TABLE Registration
(
    RegistrationNumber INTEGER PRIMARY KEY,
    RegTime VARCHAR(255) NOT NULL,
    RegDate VARCHAR(255) NOT NULL,
    FOREIGN KEY (LabManagerID) REFERENCES LabManager(LabManagerID),
    FOREIGN KEY (AdminID) REFERENCES Admin(AdminID),
    FOREIGN KEY (LabID) REFERENCES Lab(LabID),
    FOREIGN KEY (UserID) REFERENCES User(UserID),

);




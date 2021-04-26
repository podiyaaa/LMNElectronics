--
-- File generated with SQLiteStudio v3.3.3 on Fri Apr 23 22:48:43 2021
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: __EFMigrationsHistory
DROP TABLE IF EXISTS __EFMigrationsHistory;

CREATE TABLE __EFMigrationsHistory (
    MigrationId    TEXT NOT NULL
                        CONSTRAINT PK___EFMigrationsHistory PRIMARY KEY,
    ProductVersion TEXT NOT NULL
);

INSERT INTO __EFMigrationsHistory (
                                      MigrationId,
                                      ProductVersion
                                  )
                                  VALUES (
                                      '20210419161740_initial',
                                      '3.1.14'
                                  );

INSERT INTO __EFMigrationsHistory (
                                      MigrationId,
                                      ProductVersion
                                  )
                                  VALUES (
                                      '20210419162108_initial-auth',
                                      '3.1.14'
                                  );

INSERT INTO __EFMigrationsHistory (
                                      MigrationId,
                                      ProductVersion
                                  )
                                  VALUES (
                                      '20210419172914_initial',
                                      '3.1.14'
                                  );


-- Table: AspNetRoleClaims
DROP TABLE IF EXISTS AspNetRoleClaims;

CREATE TABLE AspNetRoleClaims (
    Id         INTEGER NOT NULL
                       CONSTRAINT PK_AspNetRoleClaims PRIMARY KEY AUTOINCREMENT,
    RoleId     TEXT    NOT NULL,
    ClaimType  TEXT,
    ClaimValue TEXT,
    CONSTRAINT FK_AspNetRoleClaims_AspNetRoles_RoleId FOREIGN KEY (
        RoleId
    )
    REFERENCES AspNetRoles (Id) ON DELETE CASCADE
);


-- Table: AspNetRoles
DROP TABLE IF EXISTS AspNetRoles;

CREATE TABLE AspNetRoles (
    Id               TEXT NOT NULL
                          CONSTRAINT PK_AspNetRoles PRIMARY KEY,
    Name             TEXT,
    NormalizedName   TEXT,
    ConcurrencyStamp TEXT
);


-- Table: AspNetUserClaims
DROP TABLE IF EXISTS AspNetUserClaims;

CREATE TABLE AspNetUserClaims (
    Id         INTEGER NOT NULL
                       CONSTRAINT PK_AspNetUserClaims PRIMARY KEY AUTOINCREMENT,
    UserId     TEXT    NOT NULL,
    ClaimType  TEXT,
    ClaimValue TEXT,
    CONSTRAINT FK_AspNetUserClaims_AspNetUsers_UserId FOREIGN KEY (
        UserId
    )
    REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);


-- Table: AspNetUserLogins
DROP TABLE IF EXISTS AspNetUserLogins;

CREATE TABLE AspNetUserLogins (
    LoginProvider       TEXT NOT NULL,
    ProviderKey         TEXT NOT NULL,
    ProviderDisplayName TEXT,
    UserId              TEXT NOT NULL,
    CONSTRAINT PK_AspNetUserLogins PRIMARY KEY (
        LoginProvider,
        ProviderKey
    ),
    CONSTRAINT FK_AspNetUserLogins_AspNetUsers_UserId FOREIGN KEY (
        UserId
    )
    REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);


-- Table: AspNetUserRoles
DROP TABLE IF EXISTS AspNetUserRoles;

CREATE TABLE AspNetUserRoles (
    UserId TEXT NOT NULL,
    RoleId TEXT NOT NULL,
    CONSTRAINT PK_AspNetUserRoles PRIMARY KEY (
        UserId,
        RoleId
    ),
    CONSTRAINT FK_AspNetUserRoles_AspNetRoles_RoleId FOREIGN KEY (
        RoleId
    )
    REFERENCES AspNetRoles (Id) ON DELETE CASCADE,
    CONSTRAINT FK_AspNetUserRoles_AspNetUsers_UserId FOREIGN KEY (
        UserId
    )
    REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);


-- Table: AspNetUsers
DROP TABLE IF EXISTS AspNetUsers;

CREATE TABLE AspNetUsers (
    Id                   TEXT    NOT NULL
                                 CONSTRAINT PK_AspNetUsers PRIMARY KEY,
    UserName             TEXT,
    NormalizedUserName   TEXT,
    Email                TEXT,
    NormalizedEmail      TEXT,
    EmailConfirmed       INTEGER NOT NULL,
    PasswordHash         TEXT,
    SecurityStamp        TEXT,
    ConcurrencyStamp     TEXT,
    PhoneNumber          TEXT,
    PhoneNumberConfirmed INTEGER NOT NULL,
    TwoFactorEnabled     INTEGER NOT NULL,
    LockoutEnd           TEXT,
    LockoutEnabled       INTEGER NOT NULL,
    AccessFailedCount    INTEGER NOT NULL
);


-- Table: AspNetUserTokens
DROP TABLE IF EXISTS AspNetUserTokens;

CREATE TABLE AspNetUserTokens (
    UserId        TEXT NOT NULL,
    LoginProvider TEXT NOT NULL,
    Name          TEXT NOT NULL,
    Value         TEXT,
    CONSTRAINT PK_AspNetUserTokens PRIMARY KEY (
        UserId,
        LoginProvider,
        Name
    ),
    CONSTRAINT FK_AspNetUserTokens_AspNetUsers_UserId FOREIGN KEY (
        UserId
    )
    REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);


-- Table: ElectronicItemCategories
DROP TABLE IF EXISTS ElectronicItemCategories;

CREATE TABLE ElectronicItemCategories (
    Id           TEXT NOT NULL
                      CONSTRAINT PK_ElectronicItemCategories PRIMARY KEY,
    CreatedOn    TEXT NOT NULL,
    UpdatedOn    TEXT,
    LastAccessed TEXT NOT NULL,
    Name         TEXT,
    Description  TEXT
);

INSERT INTO ElectronicItemCategories (
                                         Id,
                                         CreatedOn,
                                         UpdatedOn,
                                         LastAccessed,
                                         Name,
                                         Description
                                     )
                                     VALUES (
                                         '9C4F7B02-4FE6-44AD-A668-ABC5DAD06EEC',
                                         '2021-04-19 17:36:17.158084',
                                         NULL,
                                         '0001-01-01 00:00:00',
                                         'Heat Sinks',
                                         ''
                                     );

INSERT INTO ElectronicItemCategories (
                                         Id,
                                         CreatedOn,
                                         UpdatedOn,
                                         LastAccessed,
                                         Name,
                                         Description
                                     )
                                     VALUES (
                                         'C1CACA3F-E8AB-4CAC-98A3-13C94A517376',
                                         '2021-04-22 14:44:12.746178',
                                         NULL,
                                         '0001-01-01 00:00:00',
                                         'Batteries',
                                         ''
                                     );


-- Table: ElectronicItems
DROP TABLE IF EXISTS ElectronicItems;

CREATE TABLE ElectronicItems (
    Id           TEXT    NOT NULL
                         CONSTRAINT PK_ElectronicItems PRIMARY KEY,
    CreatedOn    TEXT    NOT NULL,
    UpdatedOn    TEXT,
    LastAccessed TEXT    NOT NULL,
    Name         TEXT,
    ImageURL     TEXT,
    Price        REAL    NOT NULL,
    Quantity     INTEGER NOT NULL,
    Description  TEXT,
    CategoryId   TEXT,
    CONSTRAINT FK_ElectronicItems_ElectronicItemCategories_CategoryId FOREIGN KEY (
        CategoryId
    )
    REFERENCES ElectronicItemCategories (Id) ON DELETE RESTRICT
);

INSERT INTO ElectronicItems (
                                Id,
                                CreatedOn,
                                UpdatedOn,
                                LastAccessed,
                                Name,
                                ImageURL,
                                Price,
                                Quantity,
                                Description,
                                CategoryId
                            )
                            VALUES (
                                'A541D660-0AE2-4584-9776-D90806F08FAD',
                                '2021-04-19 17:40:44.802533',
                                NULL,
                                '0001-01-01 00:00:00',
                                'Stereo',
                                '',
                                100.0,
                                20,
                                NULL,
                                '9C4F7B02-4FE6-44AD-A668-ABC5DAD06EEC'
                            );

INSERT INTO ElectronicItems (
                                Id,
                                CreatedOn,
                                UpdatedOn,
                                LastAccessed,
                                Name,
                                ImageURL,
                                Price,
                                Quantity,
                                Description,
                                CategoryId
                            )
                            VALUES (
                                '8BDE9CFE-265D-4C20-8CFA-F9FC811304CE',
                                '2021-04-22 14:34:37.92068',
                                NULL,
                                '0001-01-01 00:00:00',
                                'Stereo',
                                '',
                                100.0,
                                20,
                                NULL,
                                '9C4F7B02-4FE6-44AD-A668-ABC5DAD06EEC'
                            );

INSERT INTO ElectronicItems (
                                Id,
                                CreatedOn,
                                UpdatedOn,
                                LastAccessed,
                                Name,
                                ImageURL,
                                Price,
                                Quantity,
                                Description,
                                CategoryId
                            )
                            VALUES (
                                '164541DC-45E7-448C-8307-AA40D3018705',
                                '2021-04-22 14:44:50.854126',
                                NULL,
                                '0001-01-01 00:00:00',
                                'Lumala',
                                '',
                                2000.0,
                                40,
                                NULL,
                                'C1CACA3F-E8AB-4CAC-98A3-13C94A517376'
                            );

INSERT INTO ElectronicItems (
                                Id,
                                CreatedOn,
                                UpdatedOn,
                                LastAccessed,
                                Name,
                                ImageURL,
                                Price,
                                Quantity,
                                Description,
                                CategoryId
                            )
                            VALUES (
                                'A27F0FF7-9602-41D3-8FCF-ACBBD4E849C3',
                                '2021-04-22 18:51:25.518783',
                                NULL,
                                '0001-01-01 00:00:00',
                                'Luma',
                                '',
                                1500.0,
                                40,
                                NULL,
                                'C1CACA3F-E8AB-4CAC-98A3-13C94A517376'
                            );

INSERT INTO ElectronicItems (
                                Id,
                                CreatedOn,
                                UpdatedOn,
                                LastAccessed,
                                Name,
                                ImageURL,
                                Price,
                                Quantity,
                                Description,
                                CategoryId
                            )
                            VALUES (
                                'D4BC0787-5423-4146-91E2-30A2642A97DD',
                                '2021-04-22 18:51:57.87878',
                                NULL,
                                '0001-01-01 00:00:00',
                                'Bemala',
                                '',
                                1500.0,
                                40,
                                NULL,
                                'C1CACA3F-E8AB-4CAC-98A3-13C94A517376'
                            );


-- Index: EmailIndex
DROP INDEX IF EXISTS EmailIndex;

CREATE INDEX EmailIndex ON AspNetUsers (
    "NormalizedEmail"
);


-- Index: IX_AspNetRoleClaims_RoleId
DROP INDEX IF EXISTS IX_AspNetRoleClaims_RoleId;

CREATE INDEX IX_AspNetRoleClaims_RoleId ON AspNetRoleClaims (
    "RoleId"
);


-- Index: IX_AspNetUserClaims_UserId
DROP INDEX IF EXISTS IX_AspNetUserClaims_UserId;

CREATE INDEX IX_AspNetUserClaims_UserId ON AspNetUserClaims (
    "UserId"
);


-- Index: IX_AspNetUserLogins_UserId
DROP INDEX IF EXISTS IX_AspNetUserLogins_UserId;

CREATE INDEX IX_AspNetUserLogins_UserId ON AspNetUserLogins (
    "UserId"
);


-- Index: IX_AspNetUserRoles_RoleId
DROP INDEX IF EXISTS IX_AspNetUserRoles_RoleId;

CREATE INDEX IX_AspNetUserRoles_RoleId ON AspNetUserRoles (
    "RoleId"
);


-- Index: IX_ElectronicItems_CategoryId
DROP INDEX IF EXISTS IX_ElectronicItems_CategoryId;

CREATE INDEX IX_ElectronicItems_CategoryId ON ElectronicItems (
    "CategoryId"
);


-- Index: RoleNameIndex
DROP INDEX IF EXISTS RoleNameIndex;

CREATE UNIQUE INDEX RoleNameIndex ON AspNetRoles (
    "NormalizedName"
);


-- Index: UserNameIndex
DROP INDEX IF EXISTS UserNameIndex;

CREATE UNIQUE INDEX UserNameIndex ON AspNetUsers (
    "NormalizedUserName"
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;

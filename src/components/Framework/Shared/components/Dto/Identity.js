import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'ApplicationUserDTO',
        language: 'csharp',
        startingLineNumber: 7,
        item: `namespace Patika.Framework.Shared.DTO.Identity
{
    public class ApplicationUserDTO : DTO
    {
        public string Id { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public bool IsProfileCompleted { get; set; }
        public string ActivationCode { get; set; } = string.Empty;
        public DateTime ActivationCodeExpireDate { get; set; }
        public int ActivationCodeTryCount { get; set; }
        public bool IsActivationCodeValidated { get; set; }
        public DateTime? LastLogin { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }         
        public string PhoneNumber { get; set; } = string.Empty;
        public bool PhoneNumberConfirmed { get; set; }
        public string Email { get; set; } = string.Empty;
        public bool EmailConfirmed { get; set; } 
        public IEnumerable<string> Roles { get; set; } = new List<string>();
    }
}`,
        descriptions: [
            "DTO object for ApplicationUser"
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'TokenResultDTO',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Shared.DTO.Identity
{
    public class TokenResultDTO
    {
        public string AccessToken { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
        public string TokenType { get; set; } = string.Empty;
        public long ExpiresIn { get; set; }
        public bool IsActivationCodeValidated { get; set; }
        public bool IsProfileCompleted { get; set; }
        public bool IsActivationCodeSent { get; set; }
        public bool IsContractsAccepted { get; set; }
        public bool IsMigratedUser { get; set; }
        public List<Guid> Tenants { get; set; } = new();
    }
}`,
        descriptions: [
            "DTO object for Token"
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'BasicLoginInputDTO',
        language: 'csharp',
        startingLineNumber: 5,
        item: `namespace Patika.Framework.Shared.DTO.Identity
{
    public class BasicLoginInputDTO : DTO 
    {
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; 
    }
}`,
        descriptions: [
            "Login input Dto with username and password."
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'UserRegistrationInputDTO',
        language: 'csharp',
        startingLineNumber: 10,
        item: `namespace Patika.Framework.Shared.DTO.Identity
{
    public class UserRegistrationInputDTO : DTO
    {
        public string UserName { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public string ConfirmPassword { get; set; } = String.Empty; 
    }
}`,
        descriptions: [
            "Registration input Dto with username, email and password."
        ],
    }
]

const Identity = () => {
    return (
        <Stack spacing={2} direction='column'>
            <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.DTO.Identity</Typography>
            {contents.sort((a, b) => (a.order - b.order)).map((content) => {
                return (
                    content.type === 'code' ? <>
                        <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} startingLineNumber={content.startingLineNumber} />
                    </>
                        :
                        <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
                )
            })}
        </Stack>
    )
}

export default Identity
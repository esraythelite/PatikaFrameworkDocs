import { Box, Card, CardHeader, CardContent, Typography, CardActions, Link } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../DocPaper';

const MultiTenancy = () => {
    const header = 'How to use Multi Tenancy'
    const contents = [
        {
            order: 1,
            type: 'code',
            title: 'DB Context side',    
            item:`    
            public partial class MyMemoryDbContext : DbContextWithUnitOfWork<MyMemoryDbContext>
            {
                private ITenantService TenantService { get; }
                public MyMemoryDbContext(DbContextOptions<MyMemoryDbContext> options, IServiceProvider serviceProvider)
                    : base(options)
                {
                    TenantService = serviceProvider.GetService<ITenantService>() 
                        ?? throw new ServiceNotInjectedException($"{typeof(ITenantService).FullName}");
                }        
            
                public virtual DbSet<Memory> Memories { get; set; }

                protected override void OnModelCreating(ModelBuilder builder)
                {
                    builder.Entity<MemoryType>()
                        .HasQueryFilter(a => a.TenantId == TenantService.Tenant);
                }
            `,
            descriptions: [
                'ITenantService must be injected. See IdentityShared docs.',
                'OnModelCreating  use HasQueryFilter to filter data by tenantId.',
            ],
        },
        {
            order: 2,
            type: 'code',
            title: 'Add Services ',    
            item:`    
            services.AddScoped<TenantServiceMiddleware>();
            services.AddScoped<ITenantService, TenantService>();
            `,
            descriptions: [
                'Add TenantServiceMiddleware and ITenantService as scoped', 
            ],
        },
        {
            order: 3,
            type: 'code',
            title: 'Use Middleware',    
            item:`    
            app.UseMiddleware<TenantServiceMiddleware>();
            `,
            descriptions: [
                'use TenantServiceMiddleware', 
            ],
        },
        {
            order: 4,
            type: 'code',
            title: 'Api',  
            subtitle: 'example usages',  
            item:`    
            [HttpGet] 
            public async Task<ActionResult<FinalResponseDTO<List<MemoryTypeDTO>>>> GetListAsync(
                [FromQuery] int? page, [FromQuery] int? pageSize, [FromQuery] string sortBy, [FromQuery] SortTypeEnum sortType, [FromQuery] string searchText, Guid? tenantId = null)
            {
                ...
            }

            
            [HttpPost]
            public async Task<ActionResult<FinalResponseDTO<object>>> AddAsync(
                [FromBody] CreateMemoryTypeInputDTO input, Guid? tenantId = null)
            {
                ...
            }
            `,
            descriptions: [
                'Add "tenantId" to api endpoint', 
                'TenantServiceMiddleware will set this value to TenantService.Tenant'
            ],
        },
        {
            order: 4,
            type: 'text',
            title: 'UserTenants?',  
            subtitle: 'Where to keep user tenants',              
            descriptions: [
                'We have two tables on IdentityServer project:',
                '=> Tenants : table for tenant definitions',
                '=> UserTenants: mapping table for ApplicationUser <-> Tenant relation ships',  
            ],
        }
    ];
    const sampleTutorial = 'https://blog.jetbrains.com/dotnet/2022/06/22/multi-tenant-apps-with-ef-core-and-asp-net-core/';
    return (
        <>
            <Typography variant='h4' sx={{ mb: 2 }} align='center'>{header}</Typography>
            <Typography variant='body1'>Go to <Link target={'_blank'} href={sampleTutorial}  >this jetbrains blog</Link> to see the tenant documents that refer to us.</Typography>
            <DocPaper contents={contents} />

        </>
    )
}

export default MultiTenancy

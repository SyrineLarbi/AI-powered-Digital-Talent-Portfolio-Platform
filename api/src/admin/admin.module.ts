import { Controller, Get, Injectable, Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.module';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  /** Every portfolio row, minimal fields for the dashboard table. */
  async listPortfolios() {
    const rows = await this.prisma.portfolio.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        fullName: true,
        profession: true,
        location: true,
        status: true,
        slug: true,
        biography: true,
      },
    });
    return rows.map((r) => ({
      id: r.id,
      fullName: r.fullName,
      profession: r.profession,
      location: r.location,
      status: r.status,
      slug: r.slug,
      hasGenerated: !!r.biography, // a portfolio was generated if it has AI bio
    }));
  }
}

// No auth for now (admin tool, single operator). DISABLE_AUTH guards the rest.
@Controller('admin/portfolios')
export class AdminController {
  constructor(private readonly svc: AdminService) {}

  @Get()
  list() {
    return this.svc.listPortfolios();
  }
}

@Module({
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

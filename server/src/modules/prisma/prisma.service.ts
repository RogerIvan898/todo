import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {PrismaClient} from '../../../prisma/src/prisma-client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
  async onModuleInit() {
    try {
      await this.$connect()
      console.log('Successfully connected to the database')
    } catch (error) {
      console.error('Failed to connect to the database', error)
      throw error
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      console.log('Successfully disconnected from the database')
    } catch (error) {
      console.error('Failed to disconnect from the database', error)
      throw error
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlds!';
  }

  getHi(data: string): string {
    return data;
  }
}

import { StringBaseEntity } from 'app/shared/model/base-entity';
import { RepositoryInfo, TriggeredByPushTo } from 'app/entities/repository-info.model';
import { JobTimingInfo } from 'app/entities/job-timing-info.model';
import { BuildConfig } from 'app/entities/build-config.model';
import { Result } from 'app/entities/result.model';
import dayjs from 'dayjs/esm';

export class BuildJob implements StringBaseEntity {
    public id?: string;
    public name?: string;
    public buildAgentAddress?: string;
    public participationId?: number;
    public courseId?: number;
    public exerciseId?: number;
    public retryCount?: number;
    public priority?: number;
    public status?: string;
    public repositoryInfo?: RepositoryInfo;
    public jobTimingInfo?: JobTimingInfo;
    public buildConfig?: BuildConfig;
    public submissionResult?: Result;
}

export class FinishedBuildJob implements StringBaseEntity {
    public id?: string;
    public name?: string;
    public buildAgentAddress?: string;
    public participationId?: number;
    public courseId?: number;
    public exerciseId?: number;
    public retryCount?: number;
    public priority?: number;
    public status?: string;
    public triggeredByPushTo?: TriggeredByPushTo;
    public repositoryName?: string;
    public repositoryType?: string;
    public buildStartDate?: dayjs.Dayjs;
    public buildCompletionDate?: dayjs.Dayjs;
    public buildDuration?: number;
    public commitHash?: string;
    public submissionResult?: Result;
}

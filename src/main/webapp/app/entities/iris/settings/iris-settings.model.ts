import { BaseEntity } from 'app/shared/model/base-entity';
import { IrisChatSubSettings, IrisCompetencyGenerationSubSettings, IrisHestiaSubSettings } from 'app/entities/iris/settings/iris-sub-settings.model';

export enum IrisSettingsType {
    GLOBAL = 'global',
    COURSE = 'course',
    EXERCISE = 'exercise',
}

export abstract class IrisSettings implements BaseEntity {
    id?: number;
    type: IrisSettingsType;
    irisChatSettings?: IrisChatSubSettings;
    irisHestiaSettings?: IrisHestiaSubSettings;
    irisCompetencyGenerationSettings?: IrisCompetencyGenerationSubSettings;
}

export class IrisGlobalSettings implements IrisSettings {
    id?: number;
    type = IrisSettingsType.GLOBAL;
    currentVersion?: number;
    enableAutoUpdateChat?: boolean;
    enableAutoUpdateHestia?: boolean;
    enableAutoUpdateCompetencyGeneration?: boolean;
    irisChatSettings?: IrisChatSubSettings;
    irisHestiaSettings?: IrisHestiaSubSettings;
    irisCompetencyGenerationSettings?: IrisCompetencyGenerationSubSettings;
}

export class IrisCourseSettings implements IrisSettings {
    id?: number;
    type = IrisSettingsType.COURSE;
    courseId?: number;
    irisChatSettings?: IrisChatSubSettings;
    irisHestiaSettings?: IrisHestiaSubSettings;
    irisCompetencyGenerationSettings?: IrisCompetencyGenerationSubSettings;
}

export class IrisExerciseSettings implements IrisSettings {
    id?: number;
    type = IrisSettingsType.EXERCISE;
    exerciseId?: number;
    irisChatSettings?: IrisChatSubSettings;
}

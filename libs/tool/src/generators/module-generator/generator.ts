import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ModuleGeneratorGeneratorSchema } from './schema';
import { pascalCase } from 'change-case';
import { plural, singular} from 'pluralize'

export async function moduleGeneratorGenerator(
  tree: Tree,
  options: ModuleGeneratorGeneratorSchema
) {
  const projectRoot = `apps/app/src/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {...options, pascalCase, plural, singular});
  await formatFiles(tree);
}

export default moduleGeneratorGenerator;

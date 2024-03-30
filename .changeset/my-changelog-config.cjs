/** @type {import("@changesets/types").GetReleaseLine}  */

const getReleaseLine = async function (changeset, type, changelogOpts) {
  return `### ${changeset.releases} - TEST`;
};

/** @type {import("@changesets/types").getDependencyReleaseLine}  */
const getDependencyReleaseLine = async function (changesets, dependenciesUpdated, changelogOpts) {
  return `${changesets.map((changeset) => `### ${changeset.summary} - TEST2`).join("\n")}`;
};

/** @type {import("@changesets/types").ChangelogFunctions}  */
module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
